import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1240px;
`;

class Container extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    className: '',
    type: 'div',
  };

  render() {
    const {children, className, type, ...rest} = this.props;
    const thisClass = `Container center pa3 ph5-ns ${className}`;
    const theseProps = {...rest, className: thisClass};
    return (
      <StyledContainer as={type} {...theseProps}>
        {children}
      </StyledContainer>
    );
  }
}

export default Container;
