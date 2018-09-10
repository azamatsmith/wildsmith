import React from 'react';
import {graphql} from 'gatsby';
import ImagesType from './types';
import Img from 'gatsby-image';

export default class NewInstafeed extends React.Component {
  static propTypes = {
    ...ImagesType,
  };

  static defaultProps = {};

  // PRIVATE

  _renderImages = () => {
    // error checking for images
    const images = this.props.data.allFile.edges.map(({node}) => ({...node}));
    return images.filter(image => image.childImageSharp).map(image => {
      return (
        <a
          href={image.fields.link}
          key={image.fields.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Img
            className=""
            outerWrapperClassName="ma3 pointer"
            fixed={image.childImageSharp.fixed}
          />
        </a>
      );
    });
  };

  render() {
    return (
      <div className="flex flex-wrap mh5 justify-center">
        {this._renderImages()}
      </div>
    );
  }
}

export const instagramImagesFragment = graphql`
  fragment InstagramImages on Query {
    allFile(
      filter: {fields: {InstagramImage: {eq: "true"}}}
      sort: {fields: [fields___created], order: DESC}
    ) {
      edges {
        node {
          fields {
            link
          }
          childImageSharp {
            fixed(height: 450, width: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
