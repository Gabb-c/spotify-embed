module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-outline',
    '@storybook/addon-storysource',
    '@storybook/addon-postcss',
    '@storybook/addon-controls',
  ],
  framework: '@storybook/react',
};
