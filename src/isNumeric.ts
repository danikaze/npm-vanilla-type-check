import { isArray } from './isArray';

/**
 * Check if a value is numeric.
 * Strings like `"123"` are considered numbers.
 * Note that `Infinity` is not a number.
 *
 * @param value value to check
 * @returns `true` if `obj` is a numeric value
 */
export function isNumeric(value: any): boolean {
  const realStringObj = value != null && value.toString();
  return !isArray(value) && (realStringObj - parseFloat(realStringObj) + 1) >= 0;
}
