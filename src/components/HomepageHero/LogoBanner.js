import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLogoBanner = styled.div`
  height: 135px;
`;

const LogoWrapper = styled.div`
  padding: 0 24px;
`;

function LogoBanner() {
  return (
    <StyledLogoBanner className="LogoBanner flex items-center justify-center bg-white">
      <LogoWrapper>Logo 1</LogoWrapper>
      <LogoWrapper>Logo 2</LogoWrapper>
      <LogoWrapper>Logo 3</LogoWrapper>
      <LogoWrapper>Logo 4</LogoWrapper>
      <LogoWrapper>Logo 5</LogoWrapper>
    </StyledLogoBanner>
  );
}

LogoBanner.propTypes = {};

LogoBanner.defaultProps = {};

export default LogoBanner;
