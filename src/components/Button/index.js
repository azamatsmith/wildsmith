import React from 'react';
import PropTypes from 'prop-types';


export default class Button extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    extraStyles: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    extraStyles: '',
  }

  render() {
    const { children, extraStyles, ...rest } = this.props;
    return (
      <button
        className={`pv3 ph5 bg-orange white br2 ba b--orange dim sans-serif pointer ${extraStyles}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
}
