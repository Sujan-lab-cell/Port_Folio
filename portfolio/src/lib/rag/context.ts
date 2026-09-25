import { RerankedResult } from './retrieval';

export interface AssembledContext {
  formattedContext: string;
  chunkCount: number;
  totalCharacters: number;
  usedChunks: Array<{
    source: string;
    section: string;
    language: string;
  }>;
}

export function assembleContext(
  chunks: RerankedResult[],
  maxCharLength = 3500
): AssembledContext {
  const seenContents = new Set<string>();
  const contextParts: string[] = [];
  const usedChunks: Array<{ source: string; section: string; language: string }> = [];

  let currentLength = 0;

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const source = chunk.source || chunk.metadata?.source || 'N/A';
    const section = chunk.section || chunk.metadata?.section || 'N/A';
    const language = chunk.metadata?.language || (source.startsWith('ja/') ? 'ja' : 'en');

    // Clean up content for context inclusion
    const cleanedContent = chunk.content.trim();

    // Check duplicate content (fuzzy or exact)
    const normalizedContent = cleanedContent.replace(/\s+/g, ' ').toLowerCase();
    if (seenContents.has(normalizedContent)) {
      continue;
    }
    seenContents.add(normalizedContent);

    const chunkHeader = `[Chunk ${contextParts.length + 1} | Source: ${source} | Section: ${section} | Language: ${language}]`;
    const formattedChunk = `${chunkHeader}\n${cleanedContent}\n`;

    if (currentLength + formattedChunk.length > maxCharLength && contextParts.length > 0) {
      break; // Character limit safeguard
    }

    contextParts.push(formattedChunk);
    usedChunks.push({ source, section, language });
    currentLength += formattedChunk.length;
  }

  const formattedContext = contextParts.join('\n---\n\n');

  return {
    formattedContext,
    chunkCount: contextParts.length,
    totalCharacters: currentLength,
    usedChunks,
  };
}
