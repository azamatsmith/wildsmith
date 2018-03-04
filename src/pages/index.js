import React from 'react';
import {Home} from 'routes';

export default ({data}) => {
  return <Home data={data} />;
};

export const query = graphql`
  query InstaFeedQuery {
    ...InstagramImages
  }
`;
