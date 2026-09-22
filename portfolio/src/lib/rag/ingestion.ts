import fs from "fs";
import path from "path";
import { parseMarkdownToChunks, getDocumentType } from "./chunker";
import { DocumentIngestionResult, RAGChunk } from "./types";

/**
 * Ingests all Markdown files from the knowledge directory.
 * Preserves source filename, headings/sections, splits into semantic chunks,
 * and attaches metadata (source, section, document_type).
 *
 * NOTE: Does NOT connect to Supabase, generate embeddings, or call any LLM.
 */
export function ingestKnowledgeBase(knowledgeDir: string): {
  results: DocumentIngestionResult[];
  allChunks: RAGChunk[];
} {
  if (!fs.existsSync(knowledgeDir)) {
    throw new Error(`Knowledge directory not found: ${knowledgeDir}`);
  }

  const files = fs
    .readdirSync(knowledgeDir)
    .filter((file) => file.endsWith(".md"))
    .sort();

  const results: DocumentIngestionResult[] = [];
  const allChunks: RAGChunk[] = [];

  for (const filename of files) {
    const filePath = path.join(knowledgeDir, filename);
    const content = fs.readFileSync(filePath, "utf-8");
    const documentType = getDocumentType(filename);

    const chunks = parseMarkdownToChunks(content, filename);

    results.push({
      source: filename,
      document_type: documentType,
      chunk_count: chunks.length,
      chunks,
    });

    allChunks.push(...chunks);
  }

  return { results, allChunks };
}
