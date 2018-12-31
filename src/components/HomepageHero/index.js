import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './Logo';

const StyledDiv = styled.div`
  ${props => console.log('props yo', props) || ''}
`;

function HomepageHero() {
  return (
    <div className="HomepageHero vh-100 w-100">
      <Logo />
      <StyledDiv />
    </div>
  );
}

HomepageHero.propTypes = {};

HomepageHero.defaultProps = {};

export default HomepageHero;
