import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button, Container, Headline} from 'components';
import Logo from './Logo';

// const StyledDiv = styled.div``;

const StyledHeadline = styled(Headline)`
  max-width: 902px;
`;

function HomepageHero() {
  return (
    <div className="HomepageHero vh-100 w-100">
      <Logo />
      <Container className="flex flex-column items-center">
        <StyledHeadline className="black tc" as="h1">
          We design and build digital experiences that matter
        </StyledHeadline>
        {/* Scroll to work with us section */}
        <Button to="#work-with-us">Work with us</Button>
      </Container>
    </div>
  );
}

HomepageHero.propTypes = {};

HomepageHero.defaultProps = {};

export default HomepageHero;
