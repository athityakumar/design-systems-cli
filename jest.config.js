const base = require('@design-systems/test/jest.config.base');

module.exports = {
  ...base,
  setupFilesAfterEnv: undefined,
  roots: ['<rootDir>', '<rootDir>/plugins/', '<rootDir>/packages/'],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [

  ],
  testPathIgnorePatterns: [
    ...(base.testPathIgnorePatterns || []),
    'test-plugin'
  ]
};
