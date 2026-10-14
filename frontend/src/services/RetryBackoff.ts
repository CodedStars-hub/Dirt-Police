// Exponential backoff calculator with jitter
export function calculateBackoff(attempt: number): number {
  return Math.min(30000, 1000 * Math.pow(2, attempt) + Math.random() * 500);
}
