/**
 * Used to make sure that a ratio with a zero denominator will output a safe value
 * @param numerator
 * @param denominator
 * @param safeValue
 * @returns
 */
export function safeRatio(
  numerator: number,
  denominator: number,
  safeValue = 0,
): number {
  if (!denominator) return safeValue;
  return numerator / denominator;
}
