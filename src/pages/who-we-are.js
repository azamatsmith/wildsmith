import React from 'react';
import { WhoWeAre } from 'routes';

export default ({ data }) => <WhoWeAre {...data} />;

export const query = graphql`
  query ProfileImageQuery {
    mattProfile: imageSharp(id: { regex: "/matt-profile.png/" }) {
      ...ProfileImage
    }
    rachelProfile: imageSharp(id: { regex: "/rachel-profile.png/" }) {
      ...ProfileImage
    }
  }
`;
