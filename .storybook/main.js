const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')

module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // "@storybook/addon-onboarding",　storybook8では不要
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    // "@storybook/addon-postcss",
    // 以下のaddon-styling-webpackに置き換え
    "@storybook/addon-styling-webpack",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-webpack5-compiler-swc"
  ],
  framework: '@storybook/nextjs',

  staticDirs: ["public"],

  babel: async options => ({
    ...options,
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-private-methods',
      '@babel/plugin-proposal-private-property-in-object',
    ]
  }),

  webpackFinal: async (config) => {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json')
      }),
    ];

    return config;
  },

  docs: {}
}