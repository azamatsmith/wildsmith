import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';

const StyledInstafeedImage = styled.a`
  max-width: 360px;
`;

function InstafeedImage({image}) {
  return (
    <StyledInstafeedImage
      href={image.fields.link}
      key={image.fields.link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <GatsbyImage className="pointer" fixed={image.childImageSharp.fixed} />
    </StyledInstafeedImage>
  );
}
InstafeedImage.propTypes = {
  image: PropTypes.any,
};

InstafeedImage.defaultProps = {};

export default InstafeedImage;
