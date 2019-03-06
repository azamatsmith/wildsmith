import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';

const StyledFormSuccess = styled(animated.div)`
  background-color: purple;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

function FormSuccess({show}) {
  const props = useSpring({
    transform: `translateY(${show ? '0' : '100%'})`,
  });
  return (
    <StyledFormSuccess className="FormSuccess" style={props}>
      form success
    </StyledFormSuccess>
  );
}

FormSuccess.propTypes = {
  show: PropTypes.bool,
};

FormSuccess.defaultProps = {
  show: false,
};

export default FormSuccess;
