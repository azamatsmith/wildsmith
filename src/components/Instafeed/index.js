import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import Image from './components/Image';
import query from './query';

class Instafeed extends Component {
  static propTypes = {
    data: PropTypes.shape({
      photoList: PropTypes.arrayOf(
        PropTypes.shape({
          caption: PropTypes.shape({
            text: PropTypes.string,
          }),
          id: PropTypes.string,
          images: PropTypes.shape({
            standard_resolution: PropTypes.shape({
              height: PropTypes.number,
              width: PropTypes.number,
              url: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  };

  static defaultProps = {
    data: {
      photoList: [],
    },
  };

  // PRIVATE

  _renderImages = () => {
    const { photoList } = this.props.data;
    if (!photoList) {
      return null;
    }
    return this.props.data.photoList.map(image => {
      return <Image key={image.id} {...image} />;
    });
  };

  render() {
    return <div>{this._renderImages()}</div>;
  }
}

export default graphql(query)(Instafeed);
