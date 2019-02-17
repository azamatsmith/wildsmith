import React from 'react';
import styled from 'styled-components';

// logos
import Aetna from './Aetna';
import Citi from './Citi';
import CodeForAmerica from './CodeForAmerica';
import Google from './Google';
import Va from './Va';

const StyledLogoBanner = styled.div`
  height: 135px;
`;

const LogoWrapper = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  max-height: 80px;
  width: 120px;
  // large
  @media screen and (min-width: 960px) {
    margin-left: 32px;
    margin-right: 32px;
  }
`;

function LogoBanner() {
  return (
    <StyledLogoBanner className="LogoBanner flex items-center justify-center bg-white">
      <LogoWrapper
        css={css`
          width: 140px;
          max-height: 100px;
          margin-top: 10px;
        `}
      >
        <Google />
      </LogoWrapper>
      <LogoWrapper>
        <Aetna />
      </LogoWrapper>
      <LogoWrapper
        css={css`
          width: 110px;
          max-height: 80px;
        `}
      >
        <CodeForAmerica />
      </LogoWrapper>
      <LogoWrapper
        css={css`
          width: 70px;
          max-height: 75px;
        `}
      >
        <Va />
      </LogoWrapper>
      <LogoWrapper
        css={css`
          width: 75px;
          max-height: 75px;
        `}
      >
        <Citi />
      </LogoWrapper>
    </StyledLogoBanner>
  );
}

LogoBanner.propTypes = {};

LogoBanner.defaultProps = {};

export default LogoBanner;
