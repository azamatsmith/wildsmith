import React from 'react';
import { WhoWeAre } from 'routes';

export default ({ data }) => <WhoWeAre {...data} />;

export const query = graphql`
  query ProfileImageQuery {
    ...ProfileImage
  }
`;
