// same implementation as lodash library
const objectProto = Object.prototype
const hasOwnProperty = objectProto.hasOwnProperty
const toString = objectProto.toString
const symToStringTag = typeof Symbol != 'undefined' ? (Symbol as any).toStringTag : undefined

/*
 * lodash.baseGetTag
 */
/* istanbul ignore next */
function baseGetTag(value: any) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  if (!(symToStringTag && symToStringTag in Object(value))) {
    return toString.call(value)
  }
  const isOwn = hasOwnProperty.call(value, symToStringTag)
  const tag = value[symToStringTag]
  let unmasked = false
  try {
    value[symToStringTag] = undefined
    unmasked = true
  } catch (e) {}

  const result = toString.call(value)
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag
    } else {
      delete value[symToStringTag]
    }
  }
  return result
}

/*
 * lodash.isObjectLike
 */
/* istanbul ignore next */
function isObjectLike(value: any): boolean {
	return typeof value == 'object' && value !== null
}

/**
 * Check if a value is a plain object (that is, not a class instance, etc.)
 *
 * @param value value to check
 * @returns `true` if `obj` is a plain object
 */
export function isPlainObject(value: any): boolean {
	if (!isObjectLike(value) || baseGetTag(value) != '[object Object]') {
    return false
	}

  if (Object.getPrototypeOf(value) === null) {
    return true
	}

  let proto = value
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
	}

  return Object.getPrototypeOf(value) === proto
}
