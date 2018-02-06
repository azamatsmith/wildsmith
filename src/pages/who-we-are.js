import React from 'react';
import { WhoWeAre } from 'routes';

export default ({ data }) => <WhoWeAre {...data} />;

export const query = graphql`
  query ProfileImageQuery {
    mattProfile: imageSharp(id: { regex: "/matt-profile.png/" }) {
      sizes(maxWidth: 440) {
        ...GatsbyImageSharpSizes
      }
    }
    rachelProfile: imageSharp(id: { regex: "/rachel-profile.png/" }) {
      sizes(maxWidth: 440) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
