/**
 * Check if a value is a Function
 *
 * @param value value to check
 * @returns `true` if `obj` is a function
 */
export function isFunction(value: any): value is (...args) => any {
  return typeof value === 'function';
}
