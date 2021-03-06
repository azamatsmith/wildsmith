const path = require('path');
// const defaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env, defaultConfig) => {
  console.log(defaultConfig);
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });
  defaultConfig.module.rules.push({
    test: /\.svg$/,
    loaders: ['svg-inline-loader'],
    // include: path.resolve(__dirname, '../'),
  });
  return defaultConfig;
};
