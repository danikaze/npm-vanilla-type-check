# vanilla-type-check

Collection of functions for basic type checking.

## Install

Install with [https://www.npmjs.com/](npm)
```
npm install vanilla-type-check
```

## Usage

```javascript
var typeCheck = require('vanilla-type-check');

// use the provided functions to check the type of an object (all of them return a Boolean)
typeCheck.isFunction(foo);
typeCheck.isNumber(foo);
typeCheck.isNumeric(foo);
typeCheck.isInt(foo);
typeCheck.isString(foo);
typeCheck.isArray(foo);
typeCheck.isObject(foo);
typeCheck.isEmptyObject(foo);
typeCheck.isDom(foo);
```

## Running tests

Install dev dependencies

```
npm install -d && npm test
```
