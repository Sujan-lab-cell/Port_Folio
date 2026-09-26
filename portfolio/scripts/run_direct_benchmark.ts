import { performHybridRetrieval } from '../src/lib/rag/retrieval';
import { assembleContext } from '../src/lib/rag/context';
import { generateGroundedAnswer } from '../src/lib/rag/generator';

const TEST_QUERIES = [
  "Tell me about Sujan",
  "What projects has he built?",
  "What are his technical skills?",
];

async function runBenchmark() {
  console.log("=======================================================================");
  console.log("RUNNING DIRECT RAG LATENCY DIAGNOSTIC BENCHMARK (3 QUERIES)");
  console.log("=======================================================================\n");

  const results: any[] = [];

  for (let i = 0; i < TEST_QUERIES.length; i++) {
    const query = TEST_QUERIES[i];
    console.log(`[Query ${i + 1}/${TEST_QUERIES.length}] Executing: "${query}"...`);

    // Stage 1: Request received
    const stage1_start = performance.now();
    const stage1_iso = new Date().toISOString();

    // Stages 2, 3, 4: Embedding, Supabase Retrieval, Reranking
    const { topChunks, metrics: retrievalMetrics } = await performHybridRetrieval(query, 30, 5);

    // Stage 5: Context Assembly
    const assembledContext = assembleContext(topChunks);

    // Stage 6: Grounded Answer Generation
    const generationResult = await generateGroundedAnswer(query, assembledContext);

    // Stage 7: Response returned
    const stage7_end = performance.now();
    const stage7_iso = new Date().toISOString();
    const totalDurationMs = Math.round((stage7_end - stage1_start) * 100) / 100;

    const telemetry = {
      query,
      stage1_requestReceived: {
        timestamp: stage1_iso,
      },
      stage2_queryEmbedding: {
        startTime: retrievalMetrics.embedding.startTime,
        endTime: retrievalMetrics.embedding.endTime,
        durationMs: retrievalMetrics.embedding.durationMs,
        processState: retrievalMetrics.embedding.processState,
        subTelemetry: retrievalMetrics.embedding.subTelemetry,
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
        subTelemetry: generationResult.metrics.subTelemetry,
      },
      stage7_responseReturned: {
        timestamp: stage7_iso,
      },
      totalEndToEndDurationMs: totalDurationMs,
      answer: generationResult.answer,
    };

    results.push(telemetry);

    console.log(`  ✓ Total End-to-End Latency: ${totalDurationMs} ms`);
    console.log("-----------------------------------------------------------------------\n");
  }

  console.log("=======================================================================");
  console.log("DETAILED TELEMETRY BREAKDOWN PER QUERY");
  console.log("=======================================================================");
  results.forEach((t, idx) => {
    const embSub = t.stage2_queryEmbedding.subTelemetry;
    const llmSub = t.stage6_llmGeneration.subTelemetry;

    console.log(`\n-----------------------------------------------------------------------`);
    console.log(`QUERY ${idx + 1}: "${t.query}"`);
    console.log(`-----------------------------------------------------------------------`);
    console.log(`1. Request Received:           ${t.stage1_requestReceived.timestamp}`);
    console.log(`2. Query Embedding Generation: ${t.stage2_queryEmbedding.durationMs} ms`);
    if (embSub) {
      console.log(`   └─ Python Process Startup:  ${embSub.python_init_duration_ms} ms`);
      console.log(`   └─ Library Imports:         ${embSub.sentence_transformers_import_ms} ms`);
      console.log(`   └─ BAAI/bge-m3 Model Load:  ${embSub.model_loading_ms} ms`);
      console.log(`   └─ Vector Inference Encode: ${embSub.inference_ms} ms`);
    }
    console.log(`3. Supabase/pgvector Retrieval: ${t.stage3_supabaseRetrieval.durationMs} ms | Candidates: ${t.stage3_supabaseRetrieval.rawCandidatesRetrieved}`);
    console.log(`4. Hybrid Reranking:           ${t.stage4_hybridReranking.durationMs} ms | Top Chunks: ${t.stage4_hybridReranking.retrievedTopChunksCount}`);
    console.log(`5. Context Assembly:           ${t.stage5_contextAssembly.durationMs} ms | Chunks: ${t.stage5_contextAssembly.usedChunkCount}, Chars: ${t.stage5_contextAssembly.contextCharacterSize}`);
    console.log(`6. LLM Generation:             ${t.stage6_llmGeneration.durationMs} ms`);
    if (llmSub) {
      console.log(`   └─ Python Process Startup:  ${llmSub.python_startup_ms} ms`);
      console.log(`   └─ Provider Used:           ${llmSub.provider_used}`);
      console.log(`   └─ API Call Duration:       ${llmSub.api_call_duration_ms} ms`);
      console.log(`   └─ Rule Synthesis Duration: ${llmSub.rule_synthesis_duration_ms} ms`);
    }
    console.log(`7. Response Returned:          ${t.stage7_responseReturned.timestamp}`);
    console.log(`TOTAL END-TO-END LATENCY:      ${t.totalEndToEndDurationMs} ms`);
  });

  // Calculate Averages
  const avgEmb = Math.round(results.reduce((acc, r) => acc + r.stage2_queryEmbedding.durationMs, 0) / results.length * 100) / 100;
  const avgSupa = Math.round(results.reduce((acc, r) => acc + r.stage3_supabaseRetrieval.durationMs, 0) / results.length * 100) / 100;
  const avgRerank = Math.round(results.reduce((acc, r) => acc + r.stage4_hybridReranking.durationMs, 0) / results.length * 100) / 100;
  const avgCtx = Math.round(results.reduce((acc, r) => acc + r.stage5_contextAssembly.durationMs, 0) / results.length * 100) / 100;
  const avgLlm = Math.round(results.reduce((acc, r) => acc + r.stage6_llmGeneration.durationMs, 0) / results.length * 100) / 100;
  const avgTotal = Math.round(results.reduce((acc, r) => acc + r.totalEndToEndDurationMs, 0) / results.length * 100) / 100;

  console.log("\n=======================================================================");
  console.log("AVERAGE TIMINGS ACROSS ALL 3 QUERIES");
  console.log("=======================================================================");
  console.log(`Stage 1 (Request Received):           [Instant]`);
  console.log(`Stage 2 (Query Embedding Generation): ${avgEmb} ms`);
  console.log(`Stage 3 (Supabase Retrieval):         ${avgSupa} ms`);
  console.log(`Stage 4 (Hybrid Reranking):           ${avgRerank} ms`);
  console.log(`Stage 5 (Context Assembly):           ${avgCtx} ms`);
  console.log(`Stage 6 (LLM Generation):             ${avgLlm} ms`);
  console.log(`Stage 7 (Response Returned):          [Instant]`);
  console.log(`AVERAGE TOTAL END-TO-END LATENCY:     ${avgTotal} ms`);
  console.log("=======================================================================");
}

runBenchmark().catch(console.error);
