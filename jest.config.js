module.exports = {
  clearMocks: true,
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/.dist/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      { presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'] },
    ],
    //'^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss|less)$'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss|less)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    '**/*.{tsx}',
    '!**/*.d.ts', //  Exclude all type declaration files
    '!**/node_modules/**', //  Exclude all files in node_modules
    '!**/dist/**', //  Exclude all files in the dist folder
  ],
};
