import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { ingestKnowledgeBase } from "../src/lib/rag/ingestion";
import { RAGChunk } from "../src/lib/rag/types";

function run() {
  const knowledgeDir = path.join(__dirname, "..", "knowledge");
  console.log(`=======================================================`);
  console.log(`BGE-M3 Multilingual RAG Embedding Pipeline`);
  console.log(`Target Knowledge Directory: ${knowledgeDir}`);
  console.log(`=======================================================\n`);

  // Step 1: Ingest knowledge files (both en/ and ja/)
  const { results, allChunks } = ingestKnowledgeBase(knowledgeDir);

  // Filter out any temporary files or non-standard folders if any
  const validChunks = allChunks.filter(
    (chunk) => chunk.metadata.source.startsWith("en/") || chunk.metadata.source.startsWith("ja/")
  );

  const enChunks = validChunks.filter((chunk) => chunk.metadata.language === "en");
  const jaChunks = validChunks.filter((chunk) => chunk.metadata.language === "ja");

  console.log(`Ingestion Summary:`);
  console.log(`- Total Files Processed: ${results.length}`);
  console.log(`- Total Valid Chunks: ${validChunks.length}`);
  console.log(`  - English Chunks (en/): ${enChunks.length}`);
  console.log(`  - Japanese Chunks (ja/): ${jaChunks.length}\n`);

  // Step 2: Write temporary payload for Python BGE-M3 model
  const tempInputPath = path.join(__dirname, ".temp_chunks.json");
  const outputPath = path.join(__dirname, "..", "src", "lib", "rag", "embeddings.json");

  const payload = {
    total_count: validChunks.length,
    en_count: enChunks.length,
    ja_count: jaChunks.length,
    chunks: validChunks,
  };

  fs.writeFileSync(tempInputPath, JSON.stringify(payload, null, 2), "utf-8");
  console.log(`Temporary payload saved to: ${tempInputPath}`);

  // Step 3: Run Python sentence-transformers BAAI/bge-m3 embedding generator
  const pythonScriptPath = path.join(__dirname, "embed_bge_m3.py");
  console.log(`Executing Python BGE-M3 embedding generator...\n`);

  try {
    const cmd = `python "${pythonScriptPath}" "${tempInputPath}" "${outputPath}"`;
    execSync(cmd, { stdio: "inherit" });
  } catch (error) {
    console.error("Error executing Python embedding script:", error);
    process.exit(1);
  } finally {
    // Clean up temporary payload file
    if (fs.existsSync(tempInputPath)) {
      fs.unlinkSync(tempInputPath);
    }
  }

  // Step 4: Verify generated embeddings file
  if (!fs.existsSync(outputPath)) {
    console.error(`FAILED: Embeddings file was not created at ${outputPath}`);
    process.exit(1);
  }

  const generatedData = JSON.parse(fs.readFileSync(outputPath, "utf-8"));

  console.log(`\n=======================================================`);
  console.log(`EMBEDDING VERIFICATION & METRICS SUMMARY`);
  console.log(`=======================================================`);
  console.log(`Model Used:             ${generatedData.model}`);
  console.log(`Embedding Dimension:    ${generatedData.embedding_dimension}`);
  console.log(`Total Chunks Embedded:  ${generatedData.total_chunks}`);
  console.log(`  - English Chunks:     ${generatedData.en_chunks}`);
  console.log(`  - Japanese Chunks:    ${generatedData.ja_chunks}`);
  console.log(`Output Location:        ${outputPath}`);
  console.log(`Status:                 SUCCESS (Ready for Vector Storage / Testing)`);
  console.log(`=======================================================\n`);
}

run();
