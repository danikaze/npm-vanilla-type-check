/**
 * Check if a value is a string
 *
 * @param value value to check
 * @returns `true` if `obj` is a string
 */
export function isString(value: any): boolean {
  return typeof value === 'string' || value instanceof String;
}
