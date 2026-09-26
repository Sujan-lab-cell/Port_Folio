import { performHybridRetrieval } from "../src/lib/rag/retrieval";
import { assembleContext } from "../src/lib/rag/context";
import { generateGroundedAnswer } from "../src/lib/rag/generator";

const TEST_QUERIES = [
  "Tell me about Sujan",
  "Tell me about his internship",
  "How many internships did he do?",
  "What are his skills?",
  "What projects has he built?",
  "Show resume",
];

async function runTest() {
  console.log("=== RAG ANSWER GENERATION FLOW TEST ===\n");

  for (const query of TEST_QUERIES) {
    console.log(`--------------------------------------------------`);
    console.log(`QUERY: "${query}"`);
    console.log(`--------------------------------------------------`);
    const { topChunks: chunks } = await performHybridRetrieval(query, 30, 5);
    const context = assembleContext(chunks);
    const result = await generateGroundedAnswer(query, context);

    console.log(`ANSWER:\n${result.answer}\n`);
    
    // Check rules:
    const hasRawChunkHeader = result.answer.includes("[Document:") || result.answer.includes("[Chunk") || result.answer.includes("Source:");
    console.log(`VERIFICATION:`);
    console.log(`  No raw chunk headers: ${!hasRawChunkHeader ? "PASSED" : "FAILED"}`);
    if (query.includes("Tell me about Sujan")) {
      console.log(`  Identifies Sujan as final-year B.Tech AI/ML student at NMAMIT: ${result.answer.includes("NMAMIT") && result.answer.includes("final-year") ? "PASSED" : "FAILED"}`);
    }
    if (query.includes("final year project")) {
      console.log(`  Identifies Proposed / Planned status: ${result.answer.includes("Proposed") || result.answer.includes("Not Started") ? "PASSED" : "FAILED"}`);
    }
    console.log("\n");
  }
}

runTest().catch(console.error);
