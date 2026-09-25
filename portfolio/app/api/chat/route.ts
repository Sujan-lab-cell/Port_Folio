import { NextRequest, NextResponse } from 'next/server';
import { performHybridRetrieval } from '@/src/lib/rag/retrieval';
import { assembleContext } from '@/src/lib/rag/context';
import { generateGroundedAnswer } from '@/src/lib/rag/generator';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const query = body.message || body.prompt || body.query;

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Valid chat query/message is required.' },
        { status: 400 }
      );
    }

    // 1. Hybrid Retrieval & Reranking
    const topChunks = await performHybridRetrieval(query, 30, 5);

    // 2. Context Assembly
    const assembledContext = assembleContext(topChunks);

    // 3. Grounded Answer Generation
    const generationResult = await generateGroundedAnswer(query, assembledContext);

    return NextResponse.json({
      answer: generationResult.answer,
      chunks: assembledContext.usedChunks,
      chunkCount: assembledContext.chunkCount,
    });
  } catch (error: any) {
    console.error('API /api/chat error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error during RAG chat processing.' },
      { status: 500 }
    );
  }
}
