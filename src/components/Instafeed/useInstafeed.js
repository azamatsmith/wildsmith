import {useStaticQuery, graphql} from 'gatsby';

function useInstafeed() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {fields: {InstagramImage: {eq: "true"}}}
        sort: {fields: [fields___created], order: DESC}
      ) {
        edges {
          node {
            fields {
              link
            }
            childImageSharp {
              fluid(maxHeight: 375) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  return data;
}

useInstafeed.propTypes = {};

useInstafeed.defaultProps = {};

export default useInstafeed;
