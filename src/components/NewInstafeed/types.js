import PropTypes from 'prop-types';

export default {
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            // eslint-disable-next-line
            childImageSharp: PropTypes.any,
          }),
        })
      ),
    }),
  }),
};
