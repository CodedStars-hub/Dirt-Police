// Formats backing counters in Indian numbering system
export function formatCounter(n: number, lang: string): string {
  return new Intl.NumberFormat(lang === "hi" ? "hi-IN" : "en-IN").format(n);
}
