import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';

const StyledP = styled.p`
  // font-family: WorkSans-Regular;
`;

function P({children, className, ...rest}) {
  return (
    <StyledP
      className={classNames(
        'f5 f4-ns sans-serif near-black lh-copy',
        className
      )}
      {...rest}
    >
      {children}
    </StyledP>
  );
}

P.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

P.defaultProps = {
  children: null,
  className: '',
};

export default P;
