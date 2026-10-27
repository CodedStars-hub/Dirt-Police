// Exponential moving average for municipal cleanliness scores
export function calculateEma(current: number, prev: number, alpha: number = 0.2): number {
  return alpha * current + (1 - alpha) * prev;
}
