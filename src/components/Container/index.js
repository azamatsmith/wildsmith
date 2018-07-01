import React from 'react';
import PropTypes from 'prop-types';

export default class Container extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    type: 'div',
  }

  render() {
    const { type, children, className,  ...rest } = this.props;
    const thisClass = `Container ${className}`
    return (
      React.createElement(
        type,
        [...rest, className: thisClass],
        [...children]
      )
    );
  }
}
