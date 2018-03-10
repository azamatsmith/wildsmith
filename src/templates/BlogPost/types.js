import PropTypes from 'prop-types';

export default {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.object,
      fields: PropTypes.shape({
        tags: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
  }),
};
