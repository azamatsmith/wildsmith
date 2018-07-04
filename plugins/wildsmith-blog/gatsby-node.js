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
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    tags
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
    const re = /\d{2}-\d{2}-\d{4}-(.*)/g;
    const [a, slug] = re.exec(value);
    createNodeField({
      node,
      name: `slug`,
      value: `/blog/${slug}`,
    });
    // create tags nodes
    let tags = node.frontmatter.tags
      ? node.frontmatter.tags.split(',').map(cat => cat.trim())
      : [];
    createNodeField({
      name: `tags`,
      node,
      value: tags,
    });
  }
};
