import { test, expect } from 'vitest';
import { countH2Sections } from '../src/utils';

  test('counts h2 sections in sample', async () => {
    const url = 'http://localhost:3000/sample.html';
    const count = await countH2Sections(url);
    expect(count).toBe(3);
  });
