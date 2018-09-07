const toString = {}.toString;

/**
 * Check if a value is an array
 *
 * @param value value to check
 * @returns `true` if `obj` is an array
 */
export function isArray(value: any): boolean {
  return toString.call(value) === '[object Array]';
}
