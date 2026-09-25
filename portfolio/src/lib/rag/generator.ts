import path from 'path';
import { execSync } from 'child_process';
import { AssembledContext } from './context';

export interface GenerationResponse {
  answer: string;
}

export async function generateGroundedAnswer(
  query: string,
  context: AssembledContext
): Promise<GenerationResponse> {
  const pythonScript = path.join(process.cwd(), 'scripts', 'llm_generate.py');
  const payload = JSON.stringify({
    query,
    context: context.formattedContext,
  });

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
        return { answer: parsed.answer };
      }
    }
  } catch (err: any) {
    console.error('LLM Generation process error:', err.message);
  }

  return {
    answer: "The requested information is not available in Sujan's portfolio knowledge base.",
  };
}
