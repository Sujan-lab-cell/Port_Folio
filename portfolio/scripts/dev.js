const { spawn } = require('child_process');
const http = require('http');

function checkServiceRunning(url) {
  return new Promise((resolve) => {
    const req = http.get(url, (res) => {
      resolve(true);
    });
    req.on('error', () => {
      resolve(false);
    });
    req.setTimeout(1500, () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function startDev() {
  console.log('\n=======================================================================');
  console.log('[DEV WORKFLOW] Starting Portfolio Development Environment');
  console.log('=======================================================================\n');

  let embeddingProcess = null;
  const isRunning = await checkServiceRunning('http://127.0.0.1:8000/health');

  if (isRunning) {
    console.log('[DEV WORKFLOW] ✓ BGE-M3 Embedding service is ALREADY running on http://127.0.0.1:8000');
    console.log('[DEV WORKFLOW] (Skipping duplicate embedding service startup)\n');
  } else {
    console.log('[DEV WORKFLOW] Launching BGE-M3 Persistent Embedding Service (python scripts/embedding_service.py)...');
    embeddingProcess = spawn('python', ['scripts/embedding_service.py'], {
      stdio: 'inherit',
      shell: true,
    });

    embeddingProcess.on('error', (err) => {
      console.error('[DEV WORKFLOW ERROR] Failed to start embedding service:', err.message);
    });
  }

  console.log('[DEV WORKFLOW] Launching Next.js Dev Server (next dev)...');
  const nextProcess = spawn('npx', ['next', 'dev'], {
    stdio: 'inherit',
    shell: true,
  });

  const cleanup = () => {
    console.log('\n[DEV WORKFLOW] Shutting down development processes...');
    if (nextProcess && !nextProcess.killed) {
      try {
        nextProcess.kill();
      } catch (e) {}
    }
    if (embeddingProcess && !embeddingProcess.killed) {
      try {
        embeddingProcess.kill();
      } catch (e) {}
    }
    process.exit(0);
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
}

startDev();
