import React from 'react';
import {graphql} from 'gatsby';
import {Layout} from 'components';
import {WhoWeAre} from 'routes';

export default ({data}) => (
  <Layout>
    <WhoWeAre {...data} />
  </Layout>
);

export const query = graphql`
  query ProfileImageQuery {
    ...ProfileImage
  }
`;
