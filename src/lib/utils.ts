export function formatDate(dateStr: string | null): string {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return new Intl.DateTimeFormat('es-PE', { year: 'numeric', month: 'short' }).format(d);
}

export function formatPeriod(start: string | null, end: string | null, isCurrent: boolean): string {
  const s = formatDate(start);
  const e = isCurrent ? 'actualidad' : formatDate(end);
  if (!s && !e) return '';
  if (!e) return s;
  if (!s) return e;
  return `${s} — ${e}`;
}
