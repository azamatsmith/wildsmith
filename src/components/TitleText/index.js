import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TitleText.css'


export default class TitleText extends Component {
  static propTypes = {
    el: PropTypes.element,
    size: PropTypes.number,
  }

  static defaultProps = {
    element: 'span',
    size: 71,
  }

  render() {
    const { children, el, size } = this.props;
    return (
      <span style={{ fontSize: size }} className="TitleText">
        {children}
      </span>
    );
  }
}
