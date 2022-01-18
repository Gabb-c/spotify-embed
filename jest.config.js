/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/.dist/', '/.rollup.cache/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      { presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'] },
    ],
    //'^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx', // jest v27 not working with storyshots
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss|less)$',
    '<rootDir>/dist/',
  ],
  moduleNameMapper: {
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|ico)$': 'jest-transform-stub',
  },
  collectCoverageFrom: [
    'src/**/*.[jt]s?(x)',
    '!src/**/*.(stories|story).[jt]s?(x)',
    '!**/*.d.ts', //  Exclude all type declaration files
    '!**/node_modules/**', //  Exclude all files in node_modules
    '!**/dist/**', //  Exclude all files in the dist folder
  ],
};

module.exports = config;
