const axios = require('axios');
const chalk = require('chalk');
const {createRemoteFileNode} = require('gatsby-source-filesystem');

exports.sourceNodes = async (
  {actions, createNodeId, store, cache},
  configOptions
) => {
  const {accessToken, limit} = configOptions;
  if (!accessToken) {
    return console.log(
      chalk.red(
        'Error: gatsby-source-instagram failed, pleaes provide access token'
      )
    );
  }
  const {createNode, createNodeField} = actions;
  const API_URI = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${
    configOptions.accessToken
  }`;

  const {data} = await axios.get(API_URI);
  let results = data.data;
  results =
    limit && results.length > limit ? results.splice(0, limit) : results;
  for (const image of results) {
    let fileNode;
    try {
      fileNode = await createRemoteFileNode({
        // Add split so createRemoteFileNode creates the correct extension
        // (Instagram sometimes adds additional url params causing this bug)
        url: image.images.standard_resolution.url.split('?')[0],
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
      await createNodeField({
        node: fileNode,
        name: 'caption',
        value: image.caption.text,
      });
      await createNodeField({
        node: fileNode,
        name: 'likes',
        value: image.likes.count,
      });
    } catch (error) {
      console.warn('error creating node', error);
    }
  }
};
