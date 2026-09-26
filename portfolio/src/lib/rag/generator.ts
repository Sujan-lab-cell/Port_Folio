import path from 'path';
import { execSync } from 'child_process';
import { AssembledContext } from './context';

export interface GenerationMetrics {
  startTime: string;
  endTime: string;
  durationMs: number;
  processState: string;
  subTelemetry?: any;
}

export interface GenerationResponse {
  answer: string;
  metrics: GenerationMetrics;
}

export async function generateGroundedAnswer(
  query: string,
  context: AssembledContext
): Promise<GenerationResponse> {
  const genStart = performance.now();
  const startTimeISO = new Date().toISOString();

  const pythonScript = path.join(process.cwd(), 'scripts', 'llm_generate.py');
  const payload = JSON.stringify({
    query,
    context: context.formattedContext,
  });

  let answer = "The requested information is not available in Sujan's portfolio knowledge base.";
  let subTelemetry: any = null;

  try {
    const rawOutput = execSync(`python "${pythonScript}"`, {
      input: payload,
      encoding: 'utf-8',
      env: { ...process.env, PYTHONIOENCODING: 'utf-8' },
    });

    const jsonStart = rawOutput.indexOf('{');
    const jsonEnd = rawOutput.lastIndexOf('}');
    if (jsonStart !== -1 && jsonEnd !== -1) {
      const parsed = JSON.parse(rawOutput.substring(jsonStart, jsonEnd + 1));
      if (parsed.answer) {
        answer = parsed.answer;
      }
      if (parsed._telemetry) {
        subTelemetry = parsed._telemetry;
      }
    }
  } catch (err: any) {
    console.error('LLM Generation process error:', err.message);
  }

  const genEnd = performance.now();
  const endTimeISO = new Date().toISOString();

  return {
    answer,
    metrics: {
      startTime: startTimeISO,
      endTime: endTimeISO,
      durationMs: Math.round((genEnd - genStart) * 100) / 100,
      processState: subTelemetry?.provider_used 
        ? `Execution Mode: ${subTelemetry.execution_location} | Provider: ${subTelemetry.provider_used}`
        : 'Cold start: Python process spawned for llm_generate.py per query',
      subTelemetry,
    },
  };
}
