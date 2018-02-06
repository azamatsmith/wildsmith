import React from 'react';
import { WhoWeAre } from 'routes';

export default ({ data }) => <WhoWeAre {...data} />;

export const query = graphql`
  query ProfileImageQuery {
    mattProfile: imageSharp(id: { regex: "/matt-profile.png/" }) {
      resolutions(width: 339, height: 339) {
        ...GatsbyImageSharpResolutions
      }
    }
    rachelProfile: imageSharp(id: { regex: "/rachel-profile.png/" }) {
      resolutions(width: 339, height: 339) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
