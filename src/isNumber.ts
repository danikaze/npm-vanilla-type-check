/**
 * Check if a value is a number.
 * Note that Strings are NOT _numbers_ (even `"123"`. Use `isNumeric` for that)
 * and `Infinity` IS a _number_ in this case
 *
 * @param value value to check
 * @returns `true` if `obj` is a number
 */
export function isNumber(value: any): value is number {
  return !isNaN(value) && typeof value === 'number' || value instanceof Number;
}
