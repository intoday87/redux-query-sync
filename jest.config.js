module.exports = {
  cacheDirectory: '.cache/jest',
  bail: true,
  verbose: true,
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
      diagnostics: false,
    },
  },
  preset: 'jest-preset-typescript',
  testRegex: "(/__tests__/.*(test|spec))\\.(tsx|ts|js)?$",
}
