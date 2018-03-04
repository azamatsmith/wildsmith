import React from 'react';
import ImagesType from './types';
import Img from 'gatsby-image';

export default class NewInstafeed extends React.Component {
  static propTypes = {
    ...ImagesType,
  };

  static defaultProps = {};

  // PRIVATE

  _renderImages = () =>
    this.props.data.allFile.edges.map(({node}) => (
      <a href={node.fields.link} target="_blank" rel="noopener noreferrer">
        <Img
          className=""
          outerWrapperClassName="ma3 pointer"
          onClick={() => console.log('clicked')}
          resolutions={node.childImageSharp.resolutions}
        />
      </a>
    ));

  render() {
    return (
      <div className="flex flex-wrap mh5 justify-center">
        {this._renderImages()}
      </div>
    );
  }
}

export const instagramImagesFragment = graphql`
  fragment InstagramImages on RootQueryType {
    allFile(filter: {fields: {InstagramImage: {eq: "true"}}}) {
      edges {
        node {
          fields {
            link
          }
          childImageSharp {
            resolutions(height: 450) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`;
