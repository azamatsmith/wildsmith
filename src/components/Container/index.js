import React from 'react';
import PropTypes from 'prop-types';

export default class Container extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    type: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    className: '',
    type: 'div',
  }

  render() {
    const { children, className,  type, ...rest } = this.props;
    const thisClass = `Container mw5 mw7-ns center pa3 ph5-ns ${className}`;
    return (
      React.createElement(
        type,
        [...rest, className: thisClass],
        [...children]
      )
    );
  }
}
