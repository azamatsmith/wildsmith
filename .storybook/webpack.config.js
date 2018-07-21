const path = require('path');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  baseConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });
  baseConfig.module.rules.push({
    test: /\.svg$/,
    loaders: ['svg-url-loader'],
    // include: path.resolve(__dirname, '../'),
  });
  return baseConfig;
};
