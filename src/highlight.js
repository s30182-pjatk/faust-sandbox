const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export function highlight(text, query) {
  const safe = escapeHtml(text);
  if (!query || !query.trim()) return safe;
  const re = new RegExp(`(${escapeRe(escapeHtml(query.trim()))})`, 'gi');
  return safe.replace(re, '<mark>$1</mark>');
}
