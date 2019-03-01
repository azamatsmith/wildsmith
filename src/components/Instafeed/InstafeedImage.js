import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';

const StyledInstafeedImage = styled.a`
  overflow: hidden;
  max-height: 375px;

  // large
  @media screen and (min-width: 60em) {
    :nth-child(3n + 2) {
      transform: translateY(60px);
    }

    :nth-child(3n + 3) {
      transform: translateY(30px);
    }
  }
`;

const StyledImg = styled(GatsbyImage)`
  object-fit: cover;
  margin-top: 50%;
  transform: translateY(-50%);
`;

function InstafeedImage({image}) {
  return (
    <StyledInstafeedImage
      className="pointer aspect-ratio aspect-ratio--1x1"
      href={image.fields.link}
      key={image.fields.link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <StyledImg fluid={image.childImageSharp.fluid} />
    </StyledInstafeedImage>
  );
}
InstafeedImage.propTypes = {
  image: PropTypes.any,
};

InstafeedImage.defaultProps = {};

export default InstafeedImage;
