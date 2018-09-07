/**
 * Check if something is an DOM element
 *
 * @param value value to check
 * @returns `true` if `obj` is a DOM element
 */
export function isDom(value: any): boolean {
  try {
    return value instanceof HTMLElement;
  } catch(e) {
    return value != null &&
      typeof value === 'object' &&
      value.nodeType === 1 &&
      typeof value.style === 'object' &&
      typeof value.ownerDocument === 'object';
  }
}
