import { NextRequest, NextResponse } from 'next/server';
import { performHybridRetrieval } from '@/src/lib/rag/retrieval';
import { assembleContext } from '@/src/lib/rag/context';
import { generateGroundedAnswer } from '@/src/lib/rag/generator';

export async function POST(req: NextRequest) {
  // Stage 1: Request received
  const totalStart = performance.now();
  const stage1_requestReceivedISO = new Date().toISOString();

  try {
    const body = await req.json();
    const query = body.message || body.prompt || body.query;

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Valid chat query/message is required.' },
        { status: 400 }
      );
    }

    // Stages 2, 3, 4: Embedding, Supabase Retrieval, Reranking
    const { topChunks, metrics: retrievalMetrics } = await performHybridRetrieval(query, 30, 5);

    // Stage 5: Context Assembly
    const assembledContext = assembleContext(topChunks);

    // Stage 6: Grounded Answer Generation
    const generationResult = await generateGroundedAnswer(query, assembledContext);

    // Stage 7: Response returned
    const totalEnd = performance.now();
    const stage7_responseReturnedISO = new Date().toISOString();
    const totalDurationMs = Math.round((totalEnd - totalStart) * 100) / 100;

    const telemetry = {
      query,
      stage1_requestReceived: {
        timestamp: stage1_requestReceivedISO,
      },
      stage2_queryEmbedding: {
        startTime: retrievalMetrics.embedding.startTime,
        endTime: retrievalMetrics.embedding.endTime,
        durationMs: retrievalMetrics.embedding.durationMs,
        processState: retrievalMetrics.embedding.processState,
      },
      stage3_supabaseRetrieval: {
        startTime: retrievalMetrics.supabase.startTime,
        endTime: retrievalMetrics.supabase.endTime,
        durationMs: retrievalMetrics.supabase.durationMs,
        rawCandidatesRetrieved: retrievalMetrics.supabase.rawCandidateCount,
      },
      stage4_hybridReranking: {
        startTime: retrievalMetrics.reranking.startTime,
        endTime: retrievalMetrics.reranking.endTime,
        durationMs: retrievalMetrics.reranking.durationMs,
        retrievedTopChunksCount: topChunks.length,
      },
      stage5_contextAssembly: {
        startTime: assembledContext.metrics.startTime,
        endTime: assembledContext.metrics.endTime,
        durationMs: assembledContext.metrics.durationMs,
        usedChunkCount: assembledContext.chunkCount,
        contextCharacterSize: assembledContext.totalCharacters,
      },
      stage6_llmGeneration: {
        startTime: generationResult.metrics.startTime,
        endTime: generationResult.metrics.endTime,
        durationMs: generationResult.metrics.durationMs,
        processState: generationResult.metrics.processState,
      },
      stage7_responseReturned: {
        timestamp: stage7_responseReturnedISO,
      },
      totalEndToEndDurationMs: totalDurationMs,
    };

    console.log('[RAG TELEMETRY]', JSON.stringify(telemetry, null, 2));

    return NextResponse.json({
      answer: generationResult.answer,
      chunks: assembledContext.usedChunks,
      chunkCount: assembledContext.chunkCount,
      telemetry,
    });
  } catch (error: any) {
    console.error('API /api/chat error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error during RAG chat processing.' },
      { status: 500 }
    );
  }
}
