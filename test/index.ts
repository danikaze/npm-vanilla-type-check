import { describe, it } from 'mocha';
import { expect } from 'chai'

/*
 * TODO: Run tests in the browser (for isDom)
 */

import { isArray } from '../src/isArray';
import { isBoolean } from '../src/isBoolean';
// const { isDom } = require('../src/isDom');
import { isEmpty } from '../src/isEmpty';
import { isFunction } from '../src/isFunction';
import { isInt } from '../src/isInt';
import { isNumber } from '../src/isNumber';
import { isNumeric } from '../src/isNumeric';
import { isObject } from '../src/isObject';
import { isPlainObject } from '../src/isPlainObject';
import { isString } from '../src/isString';

import { getData } from './data';

const map: { [key: string]: (value: any) => boolean } = {
  isArray,
  isBoolean,
//  isDom,
  isEmpty,
  isFunction,
  isInt,
  isNumber,
  isNumeric,
  isObject,
  isPlainObject,
  isString,
};

function getJson(value: any): string {
  let json = value && value.prototype ? `${value.name}()` : JSON.stringify(value);
  if (typeof value === 'string') {
    json = `'${json}'`;
  }
  return json;
}

Object.keys(map).forEach((name) => {
  describe(`#${name}`, () => {
    const fn = map[name];
    const { pass, fail } = getData(name);

    it('should return true for asserting values', () => {
      pass.forEach((value) => {
        expect(
          fn(value),
          `${name}(${getJson(value)}) should return true`,
        ).to.be.true;
      });

      fail.forEach((value) => {
        expect(
          fn(value),
          `${name}(${getJson(value)}) should return false`,
        ).to.be.false;
      });
    });
  });
});
