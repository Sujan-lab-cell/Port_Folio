import http from 'http';

const TEST_QUERIES = [
  "Tell me about Sujan",
  "What projects has he built?",
  "What are his technical skills?",
];

async function sendQuery(query: string): Promise<any> {
  const postData = JSON.stringify({ message: query });
  
  return new Promise((resolve, reject) => {
    const req = http.request(
      'http://localhost:3000/api/chat',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData),
        },
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error(`Failed to parse response: ${data}`));
          }
        });
      }
    );

    req.on('error', (e) => reject(e));
    req.write(postData);
    req.end();
  });
}

async function runBenchmark() {
  console.log("=======================================================================");
  console.log("RUNNING RAG LATENCY DIAGNOSTIC BENCHMARK (3 REPRESENTATIVE QUERIES)");
  console.log("=======================================================================\n");

  const results = [];

  for (let i = 0; i < TEST_QUERIES.length; i++) {
    const query = TEST_QUERIES[i];
    console.log(`[Query ${i + 1}/${TEST_QUERIES.length}] Requesting: "${query}"...`);
    const wallStart = performance.now();
    const res = await sendQuery(query);
    const wallEnd = performance.now();
    const wallMs = Math.round((wallEnd - wallStart) * 100) / 100;

    results.push({
      query,
      response: res,
      wallMs,
    });

    console.log(`  Completed in ${wallMs} ms.`);
    console.log(`  Telemetry:`, JSON.stringify(res.telemetry, null, 2));
    console.log("\n-----------------------------------------------------------------------\n");
  }

  console.log("=======================================================================");
  console.log("BENCHMARK SUMMARY:");
  console.log("=======================================================================");
  results.forEach((r, idx) => {
    const t = r.response.telemetry;
    console.log(`\nQuery ${idx + 1}: "${r.query}"`);
    console.log(`  Stage 1 (Request Received):           ${t.stage1_requestReceived.timestamp}`);
    console.log(`  Stage 2 (Embedding Generation):        ${t.stage2_queryEmbedding.durationMs} ms (${t.stage2_queryEmbedding.processState})`);
    console.log(`  Stage 3 (Supabase Retrieval):          ${t.stage3_supabaseRetrieval.durationMs} ms (Candidates: ${t.stage3_supabaseRetrieval.rawCandidatesRetrieved})`);
    console.log(`  Stage 4 (Hybrid Reranking):            ${t.stage4_hybridReranking.durationMs} ms (Top Chunks: ${t.stage4_hybridReranking.retrievedTopChunksCount})`);
    console.log(`  Stage 5 (Context Assembly):            ${t.stage5_contextAssembly.durationMs} ms (Chunks: ${t.stage5_contextAssembly.usedChunkCount}, Chars: ${t.stage5_contextAssembly.contextCharacterSize})`);
    console.log(`  Stage 6 (LLM Generation):              ${t.stage6_llmGeneration.durationMs} ms (${t.stage6_llmGeneration.processState})`);
    console.log(`  Stage 7 (Response Returned):          ${t.stage7_responseReturned.timestamp}`);
    console.log(`  Total End-to-End Server Duration:      ${t.totalEndToEndDurationMs} ms`);
    console.log(`  Total Wall Clock Duration:            ${r.wallMs} ms`);
  });

  // Calculate averages
  const avgEmb = Math.round(results.reduce((acc, r) => acc + r.response.telemetry.stage2_queryEmbedding.durationMs, 0) / results.length * 100) / 100;
  const avgSupa = Math.round(results.reduce((acc, r) => acc + r.response.telemetry.stage3_supabaseRetrieval.durationMs, 0) / results.length * 100) / 100;
  const avgRerank = Math.round(results.reduce((acc, r) => acc + r.response.telemetry.stage4_hybridReranking.durationMs, 0) / results.length * 100) / 100;
  const avgCtx = Math.round(results.reduce((acc, r) => acc + r.response.telemetry.stage5_contextAssembly.durationMs, 0) / results.length * 100) / 100;
  const avgLlm = Math.round(results.reduce((acc, r) => acc + r.response.telemetry.stage6_llmGeneration.durationMs, 0) / results.length * 100) / 100;
  const avgTotal = Math.round(results.reduce((acc, r) => acc + r.response.telemetry.totalEndToEndDurationMs, 0) / results.length * 100) / 100;

  console.log("\n=======================================================================");
  console.log("AVERAGE TIMINGS ACROSS ALL 3 QUERIES:");
  console.log("=======================================================================");
  console.log(`  Avg Embedding Generation (Stage 2):    ${avgEmb} ms`);
  console.log(`  Avg Supabase Retrieval (Stage 3):      ${avgSupa} ms`);
  console.log(`  Avg Hybrid Reranking (Stage 4):        ${avgRerank} ms`);
  console.log(`  Avg Context Assembly (Stage 5):        ${avgCtx} ms`);
  console.log(`  Avg LLM Generation (Stage 6):          ${avgLlm} ms`);
  console.log(`  Avg Total End-to-End Server Latency:   ${avgTotal} ms`);
}

runBenchmark().catch(console.error);
