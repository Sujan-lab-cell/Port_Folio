import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Load environment variables from .env.local or .env if running as standalone script
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
  // Ignore if @next/env module load is not needed
}

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY || process.env.SERVICE_ROLE_KEY;

if (SUPABASE_URL) {
  process.env.SUPABASE_URL = SUPABASE_URL;
  process.env.NEXT_PUBLIC_SUPABASE_URL = SUPABASE_URL;
}

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('\n❌ Missing Supabase Service Role Key!');
  console.error('Please ensure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in your .env.local file.');
  console.error('You can find your service_role secret key in Supabase Dashboard -> Settings -> API.\n');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

interface EmbeddingFileChunk {
  id: string;
  content: string;
  metadata: {
    source: string;
    language: 'en' | 'ja';
    document_type: string;
    section: string;
    heading: string;
    chunk_index: number;
    total_chunks: number;
    char_count: number;
  };
  embedding: number[];
}

interface EmbeddingsFile {
  model: string;
  embedding_dimension: number;
  total_chunks: number;
  chunks: EmbeddingFileChunk[];
}

async function uploadEmbeddings() {
  const embeddingsPath = path.join(process.cwd(), 'src', 'lib', 'rag', 'embeddings.json');
  if (!fs.existsSync(embeddingsPath)) {
    console.error(`❌ Embeddings file not found at ${embeddingsPath}. Run generate-embeddings script first.`);
    process.exit(1);
  }

  const rawData = fs.readFileSync(embeddingsPath, 'utf-8');
  const data: EmbeddingsFile = JSON.parse(rawData);

  console.log(`\n🚀 Uploading ${data.total_chunks} embeddings (${data.embedding_dimension}D, model: ${data.model}) to Supabase...`);

  // Upload in batches of 50
  const BATCH_SIZE = 50;
  let successCount = 0;

  for (let i = 0; i < data.chunks.length; i += BATCH_SIZE) {
    const batch = data.chunks.slice(i, i + BATCH_SIZE).map((chunk) => ({
      id: chunk.id,
      content: chunk.content,
      metadata: chunk.metadata,
      embedding: chunk.embedding,
    }));

    const { error } = await supabase.from('knowledge_embeddings').upsert(batch, { onConflict: 'id' });

    if (error) {
      if (error.code === 'PGRST205' || error.message?.includes("Could not find the table")) {
        console.error(`\n❌ Table 'public.knowledge_embeddings' does not exist in your Supabase schema yet.`);
        console.error(`Please execute the SQL statements in 'supabase/schema.sql' in your Supabase SQL Editor.\n`);
        process.exit(1);
      }
      if (error.message?.includes("violates row-level security policy")) {
        console.error(`\n❌ Row-Level Security (RLS) Policy Violation!`);
        console.error(`The key provided in SUPABASE_SERVICE_ROLE_KEY does not have admin permissions to bypass RLS.`);
        console.error(`Please ensure SUPABASE_SERVICE_ROLE_KEY in .env.local is set to your project's 'service_role' secret key (Supabase Dashboard -> Settings -> API -> secret service_role key).\n`);
        process.exit(1);
      }
      console.error(`❌ Error uploading batch starting at index ${i}:`, error.message);
    } else {
      successCount += batch.length;
      console.log(`  ✓ Uploaded batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(data.chunks.length / BATCH_SIZE)} (${successCount}/${data.chunks.length} chunks)`);
    }
  }

  console.log(`\n✅ Completed! Successfully uploaded ${successCount}/${data.total_chunks} embeddings to Supabase table 'knowledge_embeddings'.\n`);
}

uploadEmbeddings().catch((err) => {
  console.error('Fatal upload error:', err);
  process.exit(1);
});
