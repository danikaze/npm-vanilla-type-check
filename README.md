# vanilla-type-check

Collection of functions for basic type checking.

## Install

Install with [npm](https://www.npmjs.com/)
```
npm install vanilla-type-check
```

## Usage

```javascript
// import functions (better tree-shaking)
import { isArray } from 'vanilla-type-check/isArray';
import { isBoolean } from 'vanilla-type-check/isBoolean';
import { isDom } from 'vanilla-type-check/isDom';
import { isEmpty } from 'vanilla-type-check/isEmpty';
import { isFunction } from 'vanilla-type-check/isFunction';
import { isInt } from 'vanilla-type-check/isInt';
import { isNumber } from 'vanilla-type-check/isNumber';
import { isNumeric } from 'vanilla-type-check/isNumeric';
import { isObject } from 'vanilla-type-check/isObject';
import { isPlainObject } from 'vanilla-type-check/isPlainObject';
import { isString } from 'vanilla-type-check/isString';

// use the provided functions to check the type of an object (all of them return a Boolean)
isArray(foo);
isBoolean(foo);
isDom(foo);
isEmpty(foo);
isFunction(foo);
isInt(foo);
isNumber(foo);
isNumeric(foo);
isObject(foo);
isPlainObject(foo);
isString(foo);
```

## Running tests

Install dev dependencies

```
npm install -d && npm test
```

## 2.0.2
- Other functions also return `value is TYPE`.

## 2.0.1

- `isArray(x: any)` now returns `x is any[]` to let typescript compiler know that is `x` an array

## Changes from 1.0.1 to 2.0.0

- Rewritten in typescript
- Removed dependencies
- Auto generated [documentation](./docs/README.md)
- New functions: `isBoolean`, `isPlainObject`
- Changed functions: `isEmptyObject` is now `isEmpty` and works with objects, arrays and DOM nodes
- Each function is exported from a different file, to help treeshaking (old way still works)
- Improved test cases

### Old way of importing files

```javascript
// import all functions
import typecheck from 'vanilla-type-check';

typecheck.isArray(foo);
typecheck.isBoolean(foo);
typecheck.isDom(foo);
typecheck.isEmpty(foo);
typecheck.isFunction(foo);
typecheck.isInt(foo);
typecheck.isNumber(foo);
typecheck.isNumeric(foo);
typecheck.isObject(foo);
typecheck.isPlainObject(foo);
typecheck.isString(foo);
```
