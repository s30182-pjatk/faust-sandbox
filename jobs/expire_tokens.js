export function expireTokens(tokens, now = new Date(), log = console.log) {
  const kept = tokens.filter((t) => new Date(t.expiresAt) > now);
  log(`expire_tokens: removed ${tokens.length - kept.length} of ${tokens.length}`);
  return kept;
}
