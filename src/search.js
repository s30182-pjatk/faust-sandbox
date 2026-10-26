export function search(tasks, query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return tasks.filter((t) => t.title.toLowerCase().includes(q));
}
