/**
 * To substract dates in days while retaining the qign and the precision
 *
 * date1-date2 = differenceInDays(date1,date2)
 * @param toCompareWith
 * @param toSub
 * @returns
 */
export function substractionInDays(toCompareWith: Date, toSub: Date): number {
  return (toCompareWith.getTime() - toSub.getTime()) / (1000 * 60 * 60 * 24);
}
