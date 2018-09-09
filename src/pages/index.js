import React from 'react';
import {Layout} from 'components';
import {Home} from 'routes';
import {graphql} from 'gatsby';

export default ({data, location}) => (
  <Layout location={location}>
    <Home data={data} />
  </Layout>
);

export const query = graphql`
  query InstaFeedQuery {
    ...InstagramImages
  }
`;
