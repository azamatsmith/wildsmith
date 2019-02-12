import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useUnderlineReady} from 'hooks';

const StyledUnderline = styled.span`
  bottom: 10px;
  left: ${props => (props.left ? `${props.left}px` : '13px')};
  height: 18px;
  transition: transform 250ms ease-out;
  transform: ${props => (props.ready ? 'scaleX(1)' : 'scaleX(0)')};
  transform-origin: left;
  z-index: -2;
  @media (max-width: 500px) {
    bottom: 7px;
    height: 9px;
  }
`;

function UnderlineHighlight({children, left}) {
  const ready = useUnderlineReady();
  return (
    <span className="UnderlineHightlight relative">
      {children}
      <StyledUnderline
        className="w-100 absolute b-0 bg-orange"
        left={left}
        ready={ready}
      />
    </span>
  );
}

UnderlineHighlight.propTypes = {
  children: PropTypes.any,
  left: PropTypes.number,
};

UnderlineHighlight.defaultProps = {
  children: null,
  left: null,
};

export default UnderlineHighlight;
