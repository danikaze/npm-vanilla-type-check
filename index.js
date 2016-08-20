var isObject = require('isobject');
var isEmptyObject = require('is-empty-object');

module.exports = (function moduleDefinition() {
  'use strict';

  var toString = {}.toString;

  var check = {
    /**
     * Check if an object is a Function
     *
     * @param  {*}       obj Object to check
     * @return {Boolean}     true if {@link obj} is a function
     *
     * @public
     */
    isFunction: function isFunction(obj) {
      return typeof obj === 'function';
    },

    /**
     * Check if an object is a number.
     * Note that <b>Strings are NOT numbers</b> (even "123". Use {@link isNumeric} for that)
     * and <code>Infinity</code> IS a number in this case
     *
     * @param  {*}           obj object to check
     * @return {Boolean}     true if {@link obj} is a numeric-typed value, false otherwise
     *
     * @public
     */
    isNumber: function isNumber(obj) {
      return !isNaN(obj) && typeof obj === 'number' || obj instanceof Number;
    },

    /**
     * Check if an object is a number.
     * Strings like <b>"123" are considered numbers</b>.
     * Note that <code>Infinity</code> is not a number.
     *
     * @param  {*}       obj Object to check
     * @return {Boolean}     true if {@link obj} is a number, false otherwise
     *
     * @public
     */
    isNumeric: function isNumeric(obj) {
      var realStringObj = obj && obj.toString();
      return !check.isArray(obj) && (realStringObj - parseFloat(realStringObj) + 1) >= 0;
    },

    /**
     * Check if an object is a integer number
     * Values like 1, 2, -1, "-1", "0", "100" return true
     *
     * @param  {*}       obj Object to check
     * @return {Boolean}     true if {@link obj} is an integer
     *
     * @public
     */
    isInt: function isInt(obj) {
      return Number(obj) == obj &&
             obj % 1 === 0 &&
             obj !== '' &&
             obj !== true &&
             obj !== false;
    },

    /**
     * Check if an object is a string
     *
     * @param  {*}       obj Object to check
     * @return {Boolean}     true if {@link obj} is a string, false otherwise
     *
     * @public
     */
    isString: function isString(obj) {
      return typeof obj === 'string' ||
             obj instanceof String;
    },

    /**
     * Check if an object is an Array
     *
     * @param  {*}       obj Object to check
     * @return {Boolean}     true if {@link obj} is an array, false otherwise
     *
     * @function
     * @public
     */
    isArray: Array.isArray || function isArray(obj) {
      return toString.call(obj) === '[object Array]';
    },

    /**
     * Check if an object is a plain Object (not jQuery object)
     *
     * @param  {*}       obj Object to check
     * @return {Boolean}     true if {@link obj} is an plain object, false otherwise
     *
     * @function
     * @public
     */
    isObject: isObject,

    /**
     * Check if an object (is an Object and) is empty
     *
     * @param  {*}       obj Object to check
     * @return {Boolean}     true if {@link obj} is an object and has no keys
     *
     * @function
     * @public
     */
    isEmptyObject: isEmptyObject,

    /**
     * Check if an object is a DOM element
     *
     * @param  {*}       obj Object to check
     * @return {Boolean}     true if {@link obj} is a DOM element
     *
     * @public
     */
    isDom: function isDom(obj) {
      try {
        return obj instanceof HTMLElement;
      } catch(e) {
        return (typeof obj === 'object') &&
               (obj.nodeType === 1) &&
               (typeof obj.style === 'object') &&
               (typeof obj.ownerDocument === 'object');
      }
    },
  };

  return check;
}());
