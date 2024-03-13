export function formatDate(date: Date) {
  const format = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date)

  return format
}
