import gql from 'graphql-tag';

export default gql`
  {
    photoList {
      id
      images {
        standard_resolution {
          height
          width
          url
        }
      }
      caption {
        text
      }
    }
  }
`;
