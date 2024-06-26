/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ["/data/", "/jest/"],
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/__tests__/jest/setupFilesAfterEnv.ts']
};