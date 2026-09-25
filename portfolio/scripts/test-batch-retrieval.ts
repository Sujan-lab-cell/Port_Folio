import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { createClient } from '@supabase/supabase-js';

// Load Env
['.env.local', '.env'].forEach((envFile) => {
  const envPath = path.join(process.cwd(), envFile);
  if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf-8');
    for (const line of envConfig.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
        const [key, ...valueParts] = trimmed.split('=');
        const k = key.trim();
        const val = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
        if (k && val) {
          process.env[k] = val;
        }
      }
    }
  }
});

try {
  const { loadEnvConfig } = require('@next/env');
  loadEnvConfig(process.cwd());
} catch {
  // Ignore
}

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ Missing Supabase URL or Key in .env.local!');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const testQueries = [
  "What did Sujan do during his FlyRank internship?",
  "What did Sujan build at AyusLab?",
  "What is Sujan's current final-year project?",
  "What is Sujan's Precision@50 at FlyRank?",
  "スジャンのFlyRankでのインターンシップについて教えてください。"
];

interface MatchResult {
  id: string;
  content: string;
  source: string;
  section: string;
  metadata: Record<string, any>;
  similarity: number;
}

interface RerankedResult extends MatchResult {
  entityBoost: number;
  specificityBoost: number;
  languageBoost: number;
  finalScore: number;
}

function detectQueryLanguage(query: string): 'ja' | 'en' {
  const jaRegex = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/;
  return jaRegex.test(query) ? 'ja' : 'en';
}

function computeHybridReranking(
  item: MatchResult,
  queryText: string
): RerankedResult {
  const vectorSim = typeof item.similarity === 'number' ? item.similarity : parseFloat(item.similarity as any);
  const lowerQuery = queryText.toLowerCase();
  const queryLang = detectQueryLanguage(queryText);
  const chunkLang = (item.metadata?.language || (item.source.startsWith('ja/') ? 'ja' : 'en')).toLowerCase();

  const contentLower = item.content.toLowerCase();
  const sourceLower = (item.source || item.metadata?.source || '').toLowerCase();
  const sectionLower = (item.section || item.metadata?.section || '').toLowerCase();

  let entityBoost = 0;
  let specificityBoost = 0;
  let languageBoost = 0;

  // 1. Exact Entity / Topic Boosts
  // FlyRank
  if ((lowerQuery.includes('flyrank') || lowerQuery.includes('フライランク')) &&
      (contentLower.includes('flyrank') || sectionLower.includes('flyrank') || contentLower.includes('フライランク'))) {
    entityBoost += 0.18;
  }

  // AyusLab / ISIRI Technologies
  if ((lowerQuery.includes('ayuslab') || lowerQuery.includes('isiri') || lowerQuery.includes('アユスラボ')) &&
      (contentLower.includes('ayuslab') || contentLower.includes('isiri') || sectionLower.includes('ayuslab') || contentLower.includes('アユスラボ'))) {
    entityBoost += 0.20;
  }

  // Final-Year Project / Colorectal Polyp
  const isFinalYearQuery = lowerQuery.includes('final-year') || lowerQuery.includes('final year') || 
                            lowerQuery.includes('colorectal') || lowerQuery.includes('polyp') || 
                            lowerQuery.includes('卒業研究') || lowerQuery.includes('ポリープ');

  if (isFinalYearQuery) {
    const isColorectalProjectChunk = sourceLower.includes('projects.md') && 
      (contentLower.includes('colorectal') || contentLower.includes('polyp') || 
       sectionLower.includes('adaptive temporal validation') || sectionLower.includes('ポリープ') || 
       sectionLower.includes('1.大腸ポリープ') || sectionLower.includes('1. adaptive temporal validation'));
    
    if (isColorectalProjectChunk) {
      entityBoost += 0.40;
    } else if (contentLower.includes('colorectal') || contentLower.includes('polyp') || contentLower.includes('ポリープ')) {
      entityBoost += 0.15;
    }
  }

  // Precision@50
  if ((lowerQuery.includes('precision@50') || lowerQuery.includes('p@50')) &&
      (contentLower.includes('precision@50') || contentLower.includes('p@50') || contentLower.includes('0.444') || contentLower.includes('0.392'))) {
    entityBoost += 0.20;
  }

  // GeoSentinel / Landslide
  if ((lowerQuery.includes('geosentinel') || lowerQuery.includes('landslide') || lowerQuery.includes('土砂崩れ')) &&
      (contentLower.includes('geosentinel') || contentLower.includes('landslide') || contentLower.includes('土砂崩れ'))) {
    entityBoost += 0.15;
  }

  // SmartQ Generator
  if ((lowerQuery.includes('smartq') || lowerQuery.includes('多言語問題')) &&
      (contentLower.includes('smartq') || contentLower.includes('多言語問題'))) {
    entityBoost += 0.15;
  }

  // WGAN-GP / Face Generation
  if ((lowerQuery.includes('wgan') || lowerQuery.includes('face generation') || lowerQuery.includes('顔画像')) &&
      (contentLower.includes('wgan') || contentLower.includes('face generation') || contentLower.includes('顔画像'))) {
    entityBoost += 0.15;
  }

  // Invoice Parser
  if ((lowerQuery.includes('invoice') || lowerQuery.includes('請求書')) &&
      (contentLower.includes('invoice') || contentLower.includes('請求書'))) {
    entityBoost += 0.15;
  }

  // YOLO / Car & Pedestrian
  if ((lowerQuery.includes('yolo') || lowerQuery.includes('pedestrian') || lowerQuery.includes('歩行者')) &&
      (contentLower.includes('yolo') || contentLower.includes('pedestrian') || contentLower.includes('歩行者'))) {
    entityBoost += 0.15;
  }

  // Power BI / E-Commerce Sales
  if ((lowerQuery.includes('power bi') || lowerQuery.includes('dax') || lowerQuery.includes('売上ダッシュボード')) &&
      (contentLower.includes('power bi') || contentLower.includes('dax') || contentLower.includes('売上ダッシュボード'))) {
    entityBoost += 0.15;
  }

  // Bank Management System
  if ((lowerQuery.includes('bank management') || lowerQuery.includes('銀行管理')) &&
      (contentLower.includes('bank management') || contentLower.includes('銀行管理'))) {
    entityBoost += 0.15;
  }

  // 2. Specificity Boost (Prefer detailed experience/projects over generic about/profiles/questions)
  const isSpecificTopicQuery = lowerQuery.includes('ayuslab') || lowerQuery.includes('flyrank') || 
                               isFinalYearQuery || lowerQuery.includes('precision@50') || 
                               lowerQuery.includes('build') || lowerQuery.includes('project') || 
                               lowerQuery.includes('internship') || lowerQuery.includes('インターン');

  if (isSpecificTopicQuery) {
    if (sourceLower.includes('projects.md') || sourceLower.includes('experience.md')) {
      specificityBoost += 0.15;
    }
    if (sourceLower.includes('about.md') || sourceLower.includes('profiles.md') || sourceLower.includes('questions.md')) {
      specificityBoost -= 0.20;
    }
  }

  // 3. Language Relevance Boost
  if (queryLang === chunkLang) {
    languageBoost += 0.12;
  }

  const finalScore = vectorSim + entityBoost + specificityBoost + languageBoost;

  return {
    ...item,
    entityBoost,
    specificityBoost,
    languageBoost,
    finalScore,
  };
}

async function runBatchTest() {
  console.log(`=======================================================`);
  console.log(`BGE-M3 MULTI-QUERY HYBRID VECTOR RETRIEVAL TEST (5 QUERIES)`);
  console.log(`=======================================================\n`);

  const pythonScript = path.join(process.cwd(), 'scripts', 'embed_query.py');

  console.log(`1. Generating 1024D query embeddings using BGE-M3 model...`);
  const jsonPayload = JSON.stringify(testQueries);
  let batchEmbeddings: Array<{ query: string; dimension: number; embedding: number[] }> = [];

  try {
    const rawOutput = execSync(`python "${pythonScript}" "${jsonPayload.replace(/"/g, '\\"')}"`, { encoding: 'utf-8' });
    const jsonStart = rawOutput.indexOf('[');
    const cleanJson = jsonStart !== -1 ? rawOutput.substring(jsonStart) : rawOutput;
    batchEmbeddings = JSON.parse(cleanJson);
    console.log(`   ✓ Successfully generated 1024D embeddings for all 5 test queries!\n`);
  } catch (err: any) {
    console.error(`❌ Failed batch embedding generation:`, err.message);
    process.exit(1);
  }

  for (let qIndex = 0; qIndex < testQueries.length; qIndex++) {
    const queryText = testQueries[qIndex];
    const queryVector = batchEmbeddings[qIndex].embedding;

    console.log(`=======================================================`);
    console.log(`QUERY ${qIndex + 1}/5: "${queryText}"`);
    console.log(`=======================================================`);

    let { data, error } = await supabase.rpc('match_knowledge', {
      query_embedding: queryVector,
      match_count: 30,
      match_threshold: 0.0,
    });

    if (error && error.code === 'PGRST202') {
      const fallbackRes = await supabase.rpc('match_knowledge_embeddings', {
        query_embedding: queryVector,
        match_count: 30,
        match_threshold: 0.0,
      });
      data = fallbackRes.data;
      error = fallbackRes.error;
    }

    if (error) {
      console.error(`❌ Error performing search for Query ${qIndex + 1}:`, error.message);
      continue;
    }

    const rawResults: MatchResult[] = data || [];
    const reranked: RerankedResult[] = rawResults.map((item) => computeHybridReranking(item, queryText));
    reranked.sort((a, b) => b.finalScore - a.finalScore);
    const top5 = reranked.slice(0, 5);

    top5.forEach((item, index) => {
      const vectorSim = (typeof item.similarity === 'number' ? item.similarity : parseFloat(item.similarity as any)).toFixed(4);
      const eBoost = item.entityBoost > 0 ? `+${item.entityBoost.toFixed(2)}` : item.entityBoost.toFixed(2);
      const sBoost = item.specificityBoost > 0 ? `+${item.specificityBoost.toFixed(2)}` : item.specificityBoost.toFixed(2);
      const lBoost = item.languageBoost > 0 ? `+${item.languageBoost.toFixed(2)}` : item.languageBoost.toFixed(2);
      const finalScore = item.finalScore.toFixed(4);

      const source = item.source || item.metadata?.source || 'N/A';
      const section = item.section || item.metadata?.section || 'N/A';
      const lang = item.metadata?.language || (source.startsWith('ja/') ? 'ja' : 'en');
      const preview = item.content.replace(/\s+/g, ' ').substring(0, 160);

      console.log(`[Rank ${index + 1}] Final Score: ${finalScore} | Vector Sim: ${vectorSim} | Entity Boost: ${eBoost} | Specificity Boost: ${sBoost} | Lang Boost: ${lBoost}`);
      console.log(`  Source: ${source} | Lang: ${lang} | Section: ${section}`);
      console.log(`  Preview: "${preview}..."\n`);
    });
  }

  console.log(`=======================================================`);
  console.log(`ALL 5 HYBRID RETRIEVAL TESTS COMPLETED.`);
  console.log(`=======================================================\n`);
}

runBatchTest().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
