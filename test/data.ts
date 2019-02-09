export interface DataDef {
  value: any;
  assert: string[];
}

class EmptyClass {}
class NotEmptyClass {
  hoge() {} // eslint-disable-line
}

/*
 * List of data to check as
 * {
 *   value: data to check
 *   assert: list of type checks that should return `true` when testing against the value
 * }
 */
const data: DataDef[] = [
  {
    value: null,
    assert: [],
  },
  {
    value: undefined,
    assert: [],
  },
  {
    value: 0,
    assert: ['isInt', 'isNumber', 'isNumeric'],
  },
  {
    value: '0',
    assert: ['isInt', 'isNumeric', 'isString'],
  },
  {
    value: 123,
    assert: ['isInt', 'isNumber', 'isNumeric'],
  },
  {
    value: '123',
    assert: ['isInt', 'isNumeric', 'isString'],
  },
  {
    value: 123.456,
    assert: ['isNumber', 'isNumeric'],
  },
  {
    value: '123.456',
    assert: ['isNumeric', 'isString'],
  },
  {
    value: true,
    assert: ['isBoolean'],
  },
  {
    value: 'true',
    assert: ['isString'],
  },
  {
    value: false,
    assert: ['isBoolean'],
  },
  {
    value: 'false',
    assert: ['isString'],
  },
  {
    value: 'abc',
    assert: ['isString'],
  },
  {
    value: {},
    assert: ['isEmpty', 'isObject', 'isPlainObject'],
  },
  {
    value: { a: 1, b: 2, c: 3 },
    assert: ['isObject', 'isPlainObject'],
  },
  {
    value: [0, 1, 2, 3],
    assert: ['isArray'],
  },
  {
    value: [],
    assert: ['isArray', 'isEmpty'],
  },
  {
    value: ['a', 'b', 'c', 'd'],
    assert: ['isArray'],
  },
  {
    value: [123, 'foobar'],
    assert: ['isArray'],
  },
  // {
  //   value: new HTMLParagraphElement(),
  //   assert: ['isDom', 'isEmpty', 'isObject'],
  // },
  // {
  //   value: (() => {
  //     const p = new HTMLParagraphElement();
  //     p.appendChild(document.createElement('span'));
  //     return p;
  //   })(),
  //   assert: ['isDom', 'isObject'],
  // },
  {
    value: () => {},
    assert: ['isFunction', 'isObject'],
  },
  {
    value: new Function('() => {}'), // eslint-disable-line no-new-func
    assert: ['isFunction', 'isObject'],
  },
  {
    value: EmptyClass,
    assert: ['isFunction', 'isObject'],
  },
  {
    value: NotEmptyClass,
    assert: ['isFunction', 'isObject'],
  },
  {
    value: new EmptyClass(),
    assert: ['isObject'],
  },
  {
    value: Infinity,
    assert: ['isNumber'],
  },
];

/**
 * Get a list of data asserting or not the especified type
 * @param {string} type
 */
export function getData(type: string): { pass: any[], fail: any[] } {
  const pass = [];
  const fail = [];
  data.forEach((item) => {
    if (item.assert.indexOf(type) !== -1) {
      pass.push(item.value);
    } else {
      fail.push(item.value);
    }
  });

  return { pass, fail };
}
