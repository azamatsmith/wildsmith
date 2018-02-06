import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TitleText.scss';

export default class TitleText extends Component {
  static propTypes = {
    extraStyles: PropTypes.string,
    fontWeight: PropTypes.string,
  };

  static defaultProps = {
    extraStyles: '',
    fontWeight: 'normal',
  };

  render() {
    const { children, extraStyles } = this.props;
    return (
      <h1 className={`TitleText near-black butler f-80 z-1 mt6 ${extraStyles}`}>
        {children}
      </h1>
    );
  }
}
