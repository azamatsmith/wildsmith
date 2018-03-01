const {GraphQLClient} = require('graphql-request');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const query = `{
  photoList {
    id
    images {
      thumbnail {
        height
        width
        url
      }
      low_resolution {
        height
        width
        url
      }
      standard_resolution {
        height
        width
        url
      }
    }
    caption {
      text
    }
    link
  }
}`;

exports.sourceNodes = async ({boundActionCreators}) => {
  const {createNode} = boundActionCreators;
  const uri = 'https://wildsmith-instagram.herokuapp.com/graphql';
  const client = new GraphQLClient(uri);

  client.request(query).then(data => console.log('data', data));
};

// You can delete this file if you're not using it
exports.modifyWebpackConfig = ({config}) => {
  const newConfig = {...config};
  const loadersArr = ['style', 'css?sourceMap', 'sass', 'sass?sourceMap'];
  if (config._loaders.sass.config.loaders) {
    newConfig._loaders.sass.config.loaders = loadersArr;
  }
  return newConfig;
};
