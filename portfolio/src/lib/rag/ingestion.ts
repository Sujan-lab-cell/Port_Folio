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

  function getAllMarkdownFiles(dir: string, baseDir: string = dir): string[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let fileList: string[] = [];

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        fileList.push(...getAllMarkdownFiles(fullPath, baseDir));
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, "/");
        fileList.push(relativePath);
      }
    }
    return fileList.sort();
  }

  const files = getAllMarkdownFiles(knowledgeDir);

  const results: DocumentIngestionResult[] = [];
  const allChunks: RAGChunk[] = [];

  for (const relativePath of files) {
    const filePath = path.join(knowledgeDir, relativePath);
    const content = fs.readFileSync(filePath, "utf-8");
    const filename = path.basename(relativePath);
    const documentType = getDocumentType(filename);

    const chunks = parseMarkdownToChunks(content, relativePath);

    results.push({
      source: relativePath,
      document_type: documentType,
      chunk_count: chunks.length,
      chunks,
    });

    allChunks.push(...chunks);
  }

  return { results, allChunks };
}
