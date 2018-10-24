const toString = {}.toString;

/**
 * Check if a value is an array
 *
 * @param value value to check
 * @returns `true` if `obj` is an array
 */
export function isArray(value: any): value is any[] {
  return toString.call(value) === '[object Array]';
}
