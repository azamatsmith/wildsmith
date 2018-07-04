import PropTypes from 'prop-types';

export default {
  excerpt: PropTypes.string,
  fields: PropTypes.shape({
    slug: PropTypes.string,
    tags: PropTypes.array,
  }),
  frontmatter: PropTypes.shape({
    author: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.any,
  }),
};
