import { isArray } from './isArray';
import { isDom } from './isDom';
import { isPlainObject } from './isPlainObject';

/**
 * Check if an object or an array is empty.
 *
 * @param value value to check
 * @returns `true` if `obj` is an object with no enumerable keys or an empty array. `false` otherwise.
 */
export function isEmpty(value: any): boolean {
  if (isArray(value)) {
    return value.length === 0;
  } else if (isDom(value)) {
    return value.children.length === 0;
  } else if (isPlainObject(value)) {
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  return false;
}
