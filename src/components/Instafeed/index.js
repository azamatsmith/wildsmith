import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo'
import query from './query';
import './Instafeed.css'



class Instafeed extends Component {
  static propTypes = {
    data: PropTypes.shape({
      photoList: PropTypes.arrayOf(PropTypes.shape({
        caption: PropTypes.shape({
          text: PropTypes.string,
        }),
        id: PropTypes.string,
        images: PropTypes.shape({
          standard_resolution: PropTypes.shape({
            height: PropTypes.number,
            width: PropTypes.number,
            url: PropTypes.string,
          })
        })
      }))
    })
  }

  static defaultProps = {
    data: {
      photoList: []
    }
  }

  // PRIVATE

  _renderImages = () => {
    const { photoList } = this.props.data;
    if (!photoList) {
      return null;
    }
    return this.props.data.photoList.map(image => (
      <p key={image.id}>{image.caption.text}</p>
    ))
  }

  render() {
    console.log('mounted instafeed', this.props);
    return (
      <div>
        {this._renderImages()}
      </div>
    );
  }
}

export default graphql(query)(Instafeed);

