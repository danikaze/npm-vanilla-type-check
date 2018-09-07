/**
 * Check if a value is an integer number
 *
 * @param value value to check
 * @returns `true` if `obj` is an integer
 */
export function isInt(value: any): boolean {
  const type = typeof value;

  return (type === 'number' || type === 'string') &&
    Number(value) == value &&
    value % 1 === 0 &&
    value !== '' &&
    value !== true &&
    value !== false;
}
