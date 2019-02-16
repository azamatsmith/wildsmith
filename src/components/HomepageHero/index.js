import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button, Container, Headline} from 'components';
import Logo from './Logo';
import LogoBanner from './LogoBanner';

// const StyledDiv = styled.div``;

const StyledHeadline = styled(Headline)`
  max-width: 902px;
`;

const StyledHomepageHero = styled.div``;

function HomepageHero() {
  return (
    <StyledHomepageHero className=" vh-100 w-100 bg-near-white flex flex-column">
      <Logo className="mt3 ml3" />
      <Container className="flex flex-column items-center flex-1 justify-center">
        <StyledHeadline className="black tc" as="h1">
          We design and build digital experiences that matter
        </StyledHeadline>
        {/* Scroll to work with us section */}
        <Button to="#work-with-us">Work with us</Button>
      </Container>
      <LogoBanner />
    </StyledHomepageHero>
  );
}

HomepageHero.propTypes = {};

HomepageHero.defaultProps = {};

export default HomepageHero;
