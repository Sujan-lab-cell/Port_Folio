import { RAGChunk, RAGChunkMetadata } from "./types";

/**
 * Maps source filenames to document_type tags.
 */
export function getDocumentType(filename: string): string {
  const name = filename.toLowerCase().replace(/\.md$/, "");
  const typeMap: Record<string, string> = {
    about: "about",
    achievements: "achievement",
    certifications: "certification",
    education: "education",
    experience: "experience",
    profiles: "profile",
    projects: "project",
    skills: "skill",
  };
  return typeMap[name] || "general";
}

/**
 * Parses markdown text into semantically cohesive chunks based on section headers (H1, H2, H3).
 * Ensures chunks retain context headers, source filename, and metadata without creating arbitrary tiny pieces.
 */
export function parseMarkdownToChunks(
  markdownContent: string,
  sourceFilename: string
): RAGChunk[] {
  const documentType = getDocumentType(sourceFilename);
  const lines = markdownContent.split(/\r?\n/);

  let rootHeading = sourceFilename.replace(/\.md$/, "");
  const rawSections: { heading: string; lines: string[] }[] = [];
  let currentSectionHeading = "Overview";
  let currentLines: string[] = [];

  for (const line of lines) {
    const h1Match = line.match(/^#\s+(.+)$/);
    const h2Match = line.match(/^##\s+(.+)$/);

    if (h1Match) {
      rootHeading = h1Match[1].trim();
      continue;
    }

    if (h2Match) {
      if (currentLines.length > 0) {
        rawSections.push({
          heading: currentSectionHeading,
          lines: [...currentLines],
        });
        currentLines = [];
      }
      currentSectionHeading = h2Match[1].trim();
      continue;
    }

    currentLines.push(line);
  }

  if (currentLines.length > 0) {
    rawSections.push({
      heading: currentSectionHeading,
      lines: [...currentLines],
    });
  }

  // Combine or process sections into optimal size chunks
  const processedBlocks: { section: string; text: string }[] = [];

  for (const sec of rawSections) {
    const rawText = sec.lines.join("\n").trim();
    if (!rawText) continue;

    // Check if section contains sub-items (e.g. 1. Item, 2. Item or H3)
    const items = rawText.split(/(?=\n###?\s+|\n\d+\.\s+\*\*)/);

    if (items.length > 1 && rawText.length > 1000) {
      for (const item of items) {
        const trimmedItem = item.trim();
        if (!trimmedItem) continue;

        // Extract sub-heading if present
        const subHeadMatch = trimmedItem.match(/^(?:###?\s+|\d+\.\s+\*\*([^*]+)\*\*)/);
        const subSection = subHeadMatch ? subHeadMatch[1] || subHeadMatch[0] : sec.heading;

        processedBlocks.push({
          section: `${sec.heading} -> ${subSection.replace(/^[#\d.\s*]+/, "").trim()}`,
          text: trimmedItem,
        });
      }
    } else {
      processedBlocks.push({
        section: sec.heading,
        text: rawText,
      });
    }
  }

  // Build final RAG chunks with metadata and contextual headers
  const totalChunks = processedBlocks.length;
  const isJapanese = sourceFilename.startsWith("ja/") || sourceFilename.startsWith("jp/");
  const language: "en" | "ja" = isJapanese ? "ja" : "en";

  const chunks: RAGChunk[] = processedBlocks.map((block, index) => {
    const chunkId = `${sourceFilename.replace(/[^a-zA-Z0-9]/g, "_")}_chunk_${index}`;
    
    // Rich contextual text for RAG retrieval
    const formattedContent = [
      `[Document: ${rootHeading} | Source: ${sourceFilename} | Language: ${language} | Section: ${block.section}]`,
      block.text,
    ].join("\n\n");

    const metadata: RAGChunkMetadata = {
      source: sourceFilename,
      language,
      document_type: documentType,
      section: block.section,
      heading: rootHeading,
      chunk_index: index,
      total_chunks: totalChunks,
      char_count: formattedContent.length,
    };

    return {
      id: chunkId,
      content: formattedContent,
      metadata,
    };
  });

  return chunks;
}
