/**
 * Check if a value is a string
 *
 * @param value value to check
 * @returns `true` if `obj` is a string
 */
export function isString(value: any): value is string {
  return typeof value === 'string' || value instanceof String;
}
