import test from 'node:test';
import assert from 'node:assert/strict';
import { expireTokens } from '../jobs/expire_tokens.js';

test('keeps only tokens that have not expired', () => {
  const now = new Date('2026-10-29T00:00:00Z');
  const kept = expireTokens(
    [{ expiresAt: '2026-10-28T00:00:00Z' }, { expiresAt: '2026-11-28T00:00:00Z' }],
    now, () => {},
  );
  assert.equal(kept.length, 1);
});
