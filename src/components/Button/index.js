import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link as GatsbyLink} from 'gatsby';
import classnames from 'classnames';

const StyledButton = styled.button`
  background-color: #393939;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2rem 3rem -15px rgba(52, 58, 64, 0.4);
  color: #fff;
  cursor: pointer;
  display: inline-block;
  outline: none;
  overflow: hidden;
  padding: 25px 70px;
  position: relative;
  text-decoration: none;
  transition: box-shadow 0.6s ease-out, transform 200ms ease-out;
  z-index: 1;
  &:hover {
    box-shadow: 0 2.1rem 5rem -15px rgba(52, 58, 64, 0.6);
    transform: translateY(-1px);
    &:after {
      transform: scaleY(1);
      transform-origin: center bottom;
    }
  }
  &:focus,
  &:active {
    // top: 1px;
  }
`;

class Button extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    to: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    to: null,
  };

  render() {
    const {className, children, style, to, ...rest} = this.props;

    const cn = classnames('flex items-center justify-center', className);

    const isInternal = url => {
      return /^\/(?!\/)/.test(url);
    };

    let linkProps = {};

    if (to && isInternal(to)) linkProps = {to, as: GatsbyLink};
    else if (to)
      linkProps = {
        as: 'a',
        href: to,
        target: '_blank',
        rel: 'noreferrer noopener',
      };

    const props = {className: cn, ...linkProps, ...rest};

    return <StyledButton {...props}>{children}</StyledButton>;
  }
}

export default Button;
