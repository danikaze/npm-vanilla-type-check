/**
 * Check if a value is an object
 *
 * @param value value to check
 * @returns `true` if `obj` is an object
 */
export function isObject(value: any): value is {} {
  const type = typeof value;
  return value != null &&
    (type === 'object' || type === 'function') &&
    toString.call(value) !== '[object Array]';
}
