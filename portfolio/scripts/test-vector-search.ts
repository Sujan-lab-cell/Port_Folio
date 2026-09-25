import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { createClient } from '@supabase/supabase-js';

// 1. Load Environment Variables
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

interface MatchResult {
  id: string;
  content: string;
  source: string;
  section: string;
  metadata: Record<string, any>;
  similarity: number;
}

async function runTest() {
  const testQuestion = process.argv[2] || "What are Sujan's technical skills, education, and project experience?";
  console.log(`=======================================================`);
  console.log(`BGE-M3 Vector Similarity Search Test`);
  console.log(`Test Query: "${testQuestion}"`);
  console.log(`=======================================================\n`);

  console.log(`1. Generating 1024D BGE-M3 embedding for test query...`);
  const pythonScript = path.join(process.cwd(), 'scripts', 'embed_query.py');
  
  let queryVector: number[] = [];
  try {
    const rawOutput = execSync(`python "${pythonScript}" "${testQuestion.replace(/"/g, '\\"')}"`, { encoding: 'utf-8' });
    const parsed = JSON.parse(rawOutput);
    queryVector = parsed.embedding;
    console.log(`   ✓ Successfully generated ${queryVector.length}D embedding vector.\n`);
  } catch (err: any) {
    console.error(`❌ Failed to generate embedding via Python:`, err.message);
    process.exit(1);
  }

  console.log(`2. Querying Supabase function 'match_knowledge_embeddings' for top 5 matches...`);
  let { data, error } = await supabase.rpc('match_knowledge_embeddings', {
    query_embedding: queryVector,
    match_count: 5,
    match_threshold: 0.0,
  });

  // Fallback to match_knowledge if match_knowledge_embeddings is not yet applied in schema
  if (error && error.code === 'PGRST202') {
    console.log(`   Notice: 'match_knowledge_embeddings' function not found. Trying fallback 'match_knowledge'...`);
    const fallbackRes = await supabase.rpc('match_knowledge', {
      query_embedding: queryVector,
      match_count: 5,
      match_threshold: 0.0,
    });
    data = fallbackRes.data;
    error = fallbackRes.error;
  }

  if (error) {
    console.error(`\n❌ Error performing vector search:`, error.message);
    if (error.message?.includes('Could not find the function')) {
      console.error(`\nTip: Please run the SQL function definitions in 'supabase/schema.sql' in your Supabase SQL Editor.`);
    }
    process.exit(1);
  }

  const results: MatchResult[] = data || [];
  console.log(`   ✓ Vector search completed! Retrieved ${results.length} chunks.\n`);

  console.log(`=======================================================`);
  console.log(`TOP 5 RETRIEVED CHUNKS & SIMILARITY SCORES`);
  console.log(`=======================================================`);

  results.forEach((item, index) => {
    const similarityScore = typeof item.similarity === 'number' ? item.similarity.toFixed(4) : item.similarity;
    console.log(`\n[Rank ${index + 1}] ID: ${item.id} | Similarity: ${similarityScore}`);
    console.log(`Source:  ${item.source || item.metadata?.source || 'N/A'}`);
    console.log(`Section: ${item.section || item.metadata?.section || 'N/A'}`);
    console.log(`Metadata: Language=${item.metadata?.language}, DocType=${item.metadata?.document_type}`);
    console.log(`Content:\n${item.content.substring(0, 250)}...`);
    console.log(`-------------------------------------------------------`);
  });

  console.log(`\n✅ Test successful! Vector similarity search is fully operational.\n`);
}

runTest().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
