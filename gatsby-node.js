/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
exports.modifyWebpackConfig = ({ config }) => {
  const newConfig = { ...config };
  const loadersArr = [
    'style',
    'css?sourceMap', 'sass',
    'sass?sourceMap'
  ];
  if (config._loaders.sass.config.loaders) {
    newConfig._loaders.sass.config.loaders = loadersArr;
  }
  return newConfig;
};
