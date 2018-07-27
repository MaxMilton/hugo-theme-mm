// https://facebook.github.io/jest/docs/en/configuration.html

'use strict';

module.exports = {
  preset: '@minna-ui/jest-config',

  // override preset to not transform html with Svelte
  // FIXME: This is not working and results in coverage collection errors
  transform: {
    '^.+\\.m?js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '/*.html/',
  ],

  coverageDirectory: '<rootDir>/test/coverage',
  // coverageThreshold: {
  //   global: {
  //     branches: 50,
  //     functions: 50,
  //     lines: 50,
  //     statements: 50,
  //   },
  // },
};
