export function search(tasks, query, { comments = false } = {}) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return tasks.filter((t) =>
    t.title.toLowerCase().includes(q) ||
    (comments && (t.comments || []).some((c) => c.body.toLowerCase().includes(q))));
}
