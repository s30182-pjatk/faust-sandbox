import test from 'node:test';
import assert from 'node:assert/strict';
import { highlight } from '../src/highlight.js';

test('wraps matches in mark', () => {
  assert.equal(highlight('Login page', 'log'), '<mark>Log</mark>in page');
});

test('escapes html before highlighting', () => {
  assert.equal(highlight('<b>x</b>', 'x'), '&lt;b&gt;<mark>x</mark>&lt;/b&gt;');
});
