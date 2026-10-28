export function expireTokens(tokens, now = new Date()) {
  return tokens.filter((t) => new Date(t.expiresAt) > now);
}
