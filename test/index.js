var expect = require('chai').expect;
var check = require('../index');

describe('#isFunction', function() {
  'use strict';

  it('detects functions', function() {
    expect(check.isFunction(function() {})).to.be.true;
  });

  it('rejects non functions', function() {
    expect(check.isFunction(123)).to.be.false;
    expect(check.isFunction('abc')).to.be.false;
    expect(check.isFunction(true)).to.be.false;
    expect(check.isFunction({ a: 1, b: 2, c: 3 })).to.be.false;
    expect(check.isFunction([0, 1, 2, 3])).to.be.false;
  });
});

describe('#isNumber', function() {
  'use strict';

  it('detects numbers', function() {
    expect(check.isNumber(123)).to.be.true;
    expect(check.isNumber(-123)).to.be.true;
    expect(check.isNumber(123.456)).to.be.true;
    expect(check.isNumber(-123.456)).to.be.true;
    expect(check.isNumber(0xFF)).to.be.true;
    expect(check.isNumber(Infinity)).to.be.true;
    expect(check.isNumber(-Infinity)).to.be.true;
    expect(check.isNumber(Number(123))).to.be.true;
    expect(check.isNumber(Number(-123))).to.be.true;
    expect(check.isNumber(new Number(123))).to.be.true;
    expect(check.isNumber(new Number(-123))).to.be.true;
  });

  it('rejects non numbers', function() {
    expect(check.isNumber('')).to.be.false;
    expect(check.isNumber('123')).to.be.false;
    expect(check.isNumber('-123')).to.be.false;
    expect(check.isNumber('123.456')).to.be.false;
    expect(check.isNumber('-123.456')).to.be.false;
    expect(check.isNumber('0xFF')).to.be.false;
    expect(check.isNumber('abc')).to.be.false;
    expect(check.isNumber(NaN)).to.be.false;
    expect(check.isNumber(null)).to.be.false;
    expect(check.isNumber(undefined)).to.be.false;
    expect(check.isNumber(true)).to.be.false;
    expect(check.isNumber(function() {})).to.be.false;
    expect(check.isNumber({ a: 1, b: 2, c: 3 })).to.be.false;
    expect(check.isNumber([0, 1, 2, 3])).to.be.false;
  });
});

describe('#isNumeric', function() {
  'use strict';

  it('detects numeric values', function() {
    expect(check.isNumeric(123)).to.be.true;
    expect(check.isNumeric(-123)).to.be.true;
    expect(check.isNumeric(123.456)).to.be.true;
    expect(check.isNumeric(-123.456)).to.be.true;
    expect(check.isNumeric(0xFF)).to.be.true;
    expect(check.isNumeric(Number(123))).to.be.true;
    expect(check.isNumeric(Number(-123))).to.be.true;
    expect(check.isNumeric(new Number(123))).to.be.true;
    expect(check.isNumeric(new Number(-123))).to.be.true;
    expect(check.isNumeric('123')).to.be.true;
    expect(check.isNumeric('-123')).to.be.true;
    expect(check.isNumeric('123.456')).to.be.true;
    expect(check.isNumeric('-123.456')).to.be.true;
    expect(check.isNumeric('0xFF')).to.be.true;
  });

  it('rejects non numeric values', function() {
    expect(check.isNumeric(Infinity)).to.be.false;
    expect(check.isNumeric(-Infinity)).to.be.false;
    expect(check.isNumeric('')).to.be.false;
    expect(check.isNumeric('abc')).to.be.false;
    expect(check.isNumeric(NaN)).to.be.false;
    expect(check.isNumeric(null)).to.be.false;
    expect(check.isNumeric(undefined)).to.be.false;
    expect(check.isNumeric(true)).to.be.false;
    expect(check.isNumeric(function() {})).to.be.false;
    expect(check.isNumeric({ a: 1, b: 2, c: 3 })).to.be.false;
    expect(check.isNumeric([0, 1, 2, 3])).to.be.false;
  });
});

describe('#isInt', function() {
  'use strict';

  it('detects int values', function() {
    expect(check.isInt(123)).to.be.true;
    expect(check.isInt(-123)).to.be.true;
    expect(check.isInt(0xFF)).to.be.true;
    expect(check.isInt(Number(123))).to.be.true;
    expect(check.isInt(Number(-123))).to.be.true;
    expect(check.isInt(new Number(123))).to.be.true;
    expect(check.isInt(new Number(-123))).to.be.true;
    expect(check.isInt('123')).to.be.true;
    expect(check.isInt('-123')).to.be.true;
    expect(check.isInt('0xFF')).to.be.true;
  });

  it('rejects non int values', function() {
    expect(check.isInt(123.456)).to.be.false;
    expect(check.isInt(-123.456)).to.be.false;
    expect(check.isInt(Infinity)).to.be.false;
    expect(check.isInt(-Infinity)).to.be.false;
    expect(check.isInt('')).to.be.false;
    expect(check.isInt('123.456')).to.be.false;
    expect(check.isInt('-123.456')).to.be.false;
    expect(check.isInt('abc')).to.be.false;
    expect(check.isInt(NaN)).to.be.false;
    expect(check.isInt(null)).to.be.false;
    expect(check.isInt(undefined)).to.be.false;
    expect(check.isInt(true)).to.be.false;
    expect(check.isInt(function() {})).to.be.false;
    expect(check.isInt({ a: 1, b: 2, c: 3 })).to.be.false;
    expect(check.isInt([0, 1, 2, 3])).to.be.false;
  });
});

describe('#isString', function() {
  'use strict';

  it('detects strings', function() {
    expect(check.isString('abc')).to.be.true;
  });

  it('rejects non string values', function() {
    expect(check.isString(function() {})).to.be.false;
    expect(check.isString(123)).to.be.false;
    expect(check.isString(true)).to.be.false;
    expect(check.isString({ a: 1, b: 2, c: 3 })).to.be.false;
    expect(check.isString([0, 1, 2, 3])).to.be.false;
  });
});

describe('#isArray', function() {
  'use strict';

  it('detects arrays', function() {
    expect(check.isArray([0, 1, 2, 3])).to.be.true;
  });

  it('rejects non arrays', function() {
    expect(check.isArray(function() {})).to.be.false;
    expect(check.isArray(123)).to.be.false;
    expect(check.isArray('abc')).to.be.false;
    expect(check.isArray(true)).to.be.false;
    expect(check.isArray({ a: 1, b: 2, c: 3 })).to.be.false;
  });
});

describe('#isObject', function() {
  'use strict';

  it('detects objects', function() {
    expect(check.isObject({ a: 1, b: 2, c: 3 })).to.be.true;
  });

  it('rejects non objects', function() {
    expect(check.isObject(function() {})).to.be.false;
    expect(check.isObject(123)).to.be.false;
    expect(check.isObject('abc')).to.be.false;
    expect(check.isObject(true)).to.be.false;
    expect(check.isObject([0, 1, 2, 3])).to.be.false;
  });
});

describe('#isEmptyObject', function() {
  'use strict';

  it('detects empty objects', function() {
    expect(check.isEmptyObject({})).to.be.true;
  });

  it('rejects non empty objects', function() {
    expect(check.isEmptyObject(function() {})).to.be.false;
    expect(check.isEmptyObject(123)).to.be.false;
    expect(check.isEmptyObject('abc')).to.be.false;
    expect(check.isEmptyObject(true)).to.be.false;
    expect(check.isEmptyObject({ a: 1, b: 2, c: 3 })).to.be.false;
    expect(check.isEmptyObject([0, 1, 2, 3])).to.be.false;
  });
});

describe('#isDom', function() {
  'use strict';

  it('detects DOM objects', function() {
    if(typeof document !== 'undefined') {
      expect(check.isDom(document.createElement('p'))).to.be.true;
      expect(check.isDom(document.createElement('a'))).to.be.true;
      expect(check.isDom(document.createElement('li'))).to.be.true;
      expect(check.isDom(document.createElement('p'))).to.be.true;
    }
  });

  it('rejects non DOM objects', function() {
    expect(check.isDom(function() {})).to.be.false;
    expect(check.isDom(123)).to.be.false;
    expect(check.isDom('abc')).to.be.false;
    expect(check.isDom(true)).to.be.false;
    expect(check.isDom({ a: 1, b: 2, c: 3 })).to.be.false;
    expect(check.isDom([0, 1, 2, 3])).to.be.false;
  });
});
