const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;
  new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/BlogPost/index.js');
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: {fields: [frontmatter___date], order: DESC}
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;
        posts.forEach((post, index) => {
          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
            },
          });
        });
        resolve();
      })
    );
  });
};

exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode});
    console.log('node', node);
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
