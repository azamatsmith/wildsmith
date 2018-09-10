import React from 'react';
import PropTypes from 'prop-types';

export default class Container extends React.Component {
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
    const thisClass = `Container mw7-ns center pa3 ph5-ns ${className}`;
    const theseProps = {...rest, className: thisClass};
    return React.createElement(type, ...theseProps, ...children);
  }
}
