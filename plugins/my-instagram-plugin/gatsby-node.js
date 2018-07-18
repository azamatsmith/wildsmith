const {createRemoteFileNode} = require(`gatsby-source-filesystem`);
const axios = require('axios');

const API_URI =
  'https://api.instagram.com/v1/users/self/media/recent/?access_token=6943356364.18e5e2e.afa6a608c90c4d718eb1769b1a2ebb56';

exports.sourceNodes = async ({boundActionCreators, store, cache}) => {
  const {createNode, createNodeField} = boundActionCreators;
  // Fetch data
  const {data} = await axios.get(API_URI);
  // use for loop for async/await support
  for (const image of data.data) {
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
  // });
};
