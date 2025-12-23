import sirv from "sirv";
import { createServer } from "http";

let server: ReturnType<typeof createServer>;

/**
 * Starts a static HTTP server before all tests run.
 * Defaults to port 3000, but respects PORT env var to avoid collisions.
 */
export async function setup() {
  const PORT = process.env.TEST_PORT || 3000;
  const assets = sirv("test/data", { dev: true });
  server = createServer(assets);

  await new Promise<void>((resolve, reject) => {
    server.listen(PORT, () => {
      console.log(`Test server running on http://localhost:${PORT}`);
      resolve();
    });

    server.on("error", (err: any) => {
      if (err.code === "EADDRINUSE") {
        console.error(`Port ${PORT} is already in use. Try setting TEST_PORT.`);
      }
      reject(err);
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
