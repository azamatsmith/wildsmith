const {GraphQLClient} = require('graphql-request');
const {createRemoteFileNode} = require(`gatsby-source-filesystem`);
const chalk = require('chalk');
const query = require('./query');

const API_URI = 'https://wildsmith-instagram.herokuapp.com/graphql';

console.log(chalk.blue('\nFetching Instagram Images from api'));
exports.sourceNodes = async ({boundActionCreators, store, cache}) => {
  const {createNode, createNodeField} = boundActionCreators;
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
      fileNode = await createRemoteFileNode({
        url: image.images.standard_resolution.url.split('?')[0],
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
      await createNodeField({
        node: fileNode,
        name: 'created',
        value: image.created_time,
      });
      console.log('filenode', i + 1, ' created');
    } catch (error) {
      console.warn('error creating node', error);
    }
  }
  console.log('done creating nodes');
};
