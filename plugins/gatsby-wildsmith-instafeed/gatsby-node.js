const {GraphQLClient} = require('graphql-request');
const {createRemoteFileNode} = require(`gatsby-source-filesystem`);
const chalk = require('chalk');
const query = require('./query');

const API_URI = 'https://wildsmith-instagram.herokuapp.com/graphql';

console.log(chalk.blue('\nFetching Instagram Images from api'));
exports.sourceNodes = async ({actions, createNodeId, store, cache}) => {
  const {createNode, createNodeField} = actions;
  const client = new GraphQLClient(API_URI);
  const queryResult = await client.request(query);

  for (let i = 0; i < queryResult.photoList.length; i++) {
    const image = queryResult.photoList[i];
    console.log(
      chalk.cyan(
        `\nCreating node for image ${i + 1} of ${queryResult.photoList.length}`
      )
    );
    let fileNode;
    try {
      const url = image.images.standard_resolution.url.split('?')[0];
      fileNode = await createRemoteFileNode({
        url,
        cache,
        store,
        createNode,
        createNodeId,
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
      await createNodeField({
        node: fileNode,
        name: 'created',
        value: image.created_time,
      });
      console.log('\nFilenode', i + 1, ' created');
    } catch (error) {
      console.warn('error creating node', error);
    }
  }
  console.log('done creating nodes');
};
