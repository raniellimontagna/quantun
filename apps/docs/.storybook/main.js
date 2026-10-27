const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return {
      ...config,
      // Relative asset paths so the static build also works under a sub-path (GitHub Pages).
      base: './',
      resolve: {
        alias: [
          {
            find: '@quantun/core',
            replacement: path.resolve(__dirname, '../../../packages/quantun-core/'),
          },
        ],
      },
    }
  },
}
