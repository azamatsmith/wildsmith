import PropTypes from 'prop-types';

export default {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            fields: PropTypes.shape({
              slug: PropTypes.string,
              tags: PropTypes.arrayOf(PropTypest.string),
            }),
            frontmatter: PropTypes.shape({
              author: PropTypes.string,
              date: PropTypes.string,
              title: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }),
};
