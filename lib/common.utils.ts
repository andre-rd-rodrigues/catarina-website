export function formatDate(value: string | undefined): string {
  if (!value) return '';
  try {
    const d = new Date(value);
    return d.toLocaleDateString('pt-PT', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return value;
  }
}
