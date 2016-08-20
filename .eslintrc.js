module.exports = {
  extends: 'airbnb',
  installedESLint: true,
  plugins: [
    'react',
  ],
  parserOptions: {
    sourceType: 'script',
    globalReturn: true,
  },
  rules: {
    strict: ['error', 'function'],
    'spaced-comment': ['error', 'always', {
      exceptions: ['/'],
    }],
    /*
    'key-spacing': ['error', {
        'align': {
            'beforeColon': false,
            'afterColon' : true,
            'on'         : 'colon'
        }
    }],*/
    'keyword-spacing': ['error', {
      after: true,
      overrides: {
        if: { after: false },
        for: { after: false },
        while: { after: false },
        catch: { after: false },
      },
    }],
    'no-use-before-define': ['error', {
      functions: false,
    }],
    'no-unused-vars': ['error', {
      args: 'none',
    }],
    'no-var': 0,
    'space-before-function-paren': 0,
    'prefer-arrow-callback': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'object-shorthand': 0,
    eqeqeq: 0,
  },
};
