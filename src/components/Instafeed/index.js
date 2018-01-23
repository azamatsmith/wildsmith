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

  static defaultProps = {}

  render() {
    console.log('mounted instafeed', this.props);
    return (
      <div>

      </div>
    );
  }
}

export default graphql(query)(Instafeed);

