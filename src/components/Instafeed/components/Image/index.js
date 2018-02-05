import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-image';
import './Image.css';

export default class Image extends Component {
  static propTypes = {
    caption: PropTypes.shape({
      text: PropTypes.string,
    }),
    images: PropTypes.shape({
      thumbnail: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
        url: PropTypes.string,
      }),
      low_resolution: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
        url: PropTypes.string,
      }),
      standard_resolution: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
        url: PropTypes.string,
      }),
    }),
  };

  static defaultProps = {};

  // PRIVATE

  _renderImage = (src, loading) => (
    <img
      className="Image-img"
      style={{ opacity: loading ? 0.5 : 1 }}
      src={src}
      alt={this.props.caption.text}
      height="200"
      width="200"
    />
  );

  render() {
    const high = this.props.images.standard_resolution.url;
    // const low = this.props.images.low_resolution.url;
    const thumb = this.props.images.thumbnail.url;
    return (
      <ProgressiveImage src={high} placeholder={thumb}>
        {this._renderImage}
      </ProgressiveImage>
    );
  }
}
