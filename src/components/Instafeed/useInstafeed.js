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
              fixed(height: 405, width: 360) {
                ...GatsbyImageSharpFixed
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
