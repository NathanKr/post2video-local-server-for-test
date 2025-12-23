import sirv from 'sirv';
import { createServer } from 'http';

let server: ReturnType<typeof createServer>;

/**
 * Starts a static HTTP server before all tests run.
 * Serves files from test/data directory on http://localhost:3000
 */
export async function setup() {
  const assets = sirv('test/data', { dev: true });
  server = createServer(assets);

  await new Promise<void>((resolve) => {
    server.listen(3000, () => {
      console.log('Test server running on http://localhost:3000');
      resolve();
    });
  });
}

/**
 * Stops the static HTTP server after all tests complete.
 */
export async function teardown() {
  await new Promise<void>((resolve) => {
    server.close(() => resolve());
  });
}