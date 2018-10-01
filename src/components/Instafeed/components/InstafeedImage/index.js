import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';

export default class extends React.Component {
  static propTypes = {
    image: PropTypes.any,
  };

  static defaultProps = {};

  render() {
    const {image} = this.props;
    return (
      <a
        href={image.fields.link}
        key={image.fields.link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <GatsbyImage
          className="ma3 pointer"
          fixed={image.childImageSharp.fixed}
        />
      </a>
    );
  }
}
