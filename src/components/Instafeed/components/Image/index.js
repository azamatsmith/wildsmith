import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import ProgressiveImage from 'react-progressive-image';

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
      className="Image-img ma2"
      style={{opacity: loading ? 0.5 : 1, maxHeight: '450px', width: 'auto'}}
      src={src}
      alt={this.props.caption.text}
    />
  );

  render() {
    const high = this.props.images.standard_resolution.url;
    const thumb = this.props.images.thumbnail.url;
    return null;
  }
}
