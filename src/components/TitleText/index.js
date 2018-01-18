import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TitleText.css'


export default class TitleText extends Component {
  static propTypes = {
    el: PropTypes.element,
    fontSize: PropTypes.number,
    fontWeight: PropTypes.string,
  }

  static defaultProps = {
    element: 'span',
    fontSize: 71,
    fontWeight: 'normal',
  }

  render() {
    const { children, el, fontWeight, fontSize } = this.props;
    return (
      <span style={{ fontSize, fontWeight }} className="TitleText">
        {children}
      </span>
    );
  }
}
