const {GraphQLClient} = require('graphql-request');
const query = require('./query');

const API_URI = 'https://wildsmith-instagram.herokuapp.com/graphql';

exports.sourceNodes = async ({boundActionCreators}) => {
  const {createNode} = boundActionCreators;
  const client = new GraphQLClient(API_URI);
  const queryResult = await client.request(query);
  console.log('queryResult', queryResult);
};
