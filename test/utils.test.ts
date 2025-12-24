import { test, expect } from "vitest";
import { countH2Sections } from "../src/utils";

test("counts h2 sections in sample", async () => {
  const PORT = process.env.TEST_PORT || 8080;

  const url = `http://localhost:${PORT}/sample.html`;
  const count = await countH2Sections(url);
  expect(count).toBe(3);
});
