const {GraphQLClient} = require('graphql-request');
const {createRemoteFileNode} = require(`gatsby-source-filesystem`);
const chalk = require('chalk');
const query = require('./query');
// const ImageNode = require('./nodes');

const API_URI = 'https://wildsmith-instagram.herokuapp.com/graphql';

console.log(chalk.blue('\nFetching Instagram Images from api'));
exports.sourceNodes = async ({boundActionCreators, store, cache}) => {
  const {createNode, createNodeField} = boundActionCreators;
  const client = new GraphQLClient(API_URI);
  const queryResult = await client.request(query);

  // Have to go old school here since forEach isn't working with async await
  // for (let i = 0; i < queryResult.photoList.length; i++) {
  queryResult.photoList.map(async (image, i) => {
    // const imageNode = ImageNode(image);
    // createNode(imageNode);
    console.log(
      chalk.cyan(
        `\nCreating node for image ${i + 1} of ${queryResult.photoList.length}`
      )
    );
    let fileNode;
    try {
      fileNode = await createRemoteFileNode({
        url: image.images.standard_resolution.url,
        cache,
        store,
        createNode,
      });
      await createNodeField({
        node: fileNode,
        name: 'InstagramImage',
        value: 'true',
      });
      await createNodeField({
        node: fileNode,
        name: 'link',
        value: image.link,
      });
    } catch (error) {
      console.warn('error creating node', error);
    }
  });
};
