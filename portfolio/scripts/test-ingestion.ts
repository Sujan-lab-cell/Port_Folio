import path from "path";
import { ingestKnowledgeBase } from "../src/lib/rag/ingestion";

function run() {
  const knowledgeDir = path.join(__dirname, "..", "knowledge");
  console.log(`Ingesting knowledge files from: ${knowledgeDir}\n`);

  const { results, allChunks } = ingestKnowledgeBase(knowledgeDir);

  console.log("=== INGESTION SUMMARY ===");
  console.log(`Total Markdown Files Processed: ${results.length}`);
  console.log(`Total Chunks Generated: ${allChunks.length}\n`);

  console.log("--- Per-File Breakdown ---");
  for (const res of results) {
    console.log(`- File: ${res.source} | Type: ${res.document_type} | Chunks: ${res.chunk_count}`);
  }

  console.log("\n=== SAMPLE CHUNKS PREVIEW ===");
  const sampleChunks = allChunks.slice(0, 3);
  sampleChunks.forEach((chunk, i) => {
    console.log(`\n--- [Sample Chunk ${i + 1}/${allChunks.length}] ID: ${chunk.id} ---`);
    console.log(`Metadata:`, JSON.stringify(chunk.metadata, null, 2));
    console.log(`Content:\n${chunk.content.substring(0, 300)}...`);
  });
}

run();
