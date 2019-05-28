module.exports = {
  module: {
    rules: [
      {
        test: /\.story\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
      },
    ],
  },
};
