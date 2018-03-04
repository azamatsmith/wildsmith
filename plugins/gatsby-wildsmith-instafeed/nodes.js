const createNodeHelpers = require('gatsby-node-helpers').default;

const {createNodeFactory, generateNodeId, generateTypeName} = createNodeHelpers(
  {
    typePrefix: `InstaFeed`,
  }
);

const ImageNode = createNodeFactory('Image', node => {
  return node;
});

module.exports = ImageNode;
