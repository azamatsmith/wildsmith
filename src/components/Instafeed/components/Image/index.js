import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Image.css'


export default class Image extends Component {
  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    url: PropTypes.string,
  }

  static defaultProps = {}

  state = {

  }

  render() {
    return (
      <ProgressiveImage>

      </ProgressiveImage>
    );
  }
}
