import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import InstafeedImage from './components/InstafeedImage';

export default class NewInstafeed extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  // PRIVATE

  _renderImages = data => {
    // error checking for images
    const images = data.allFile.edges.map(({node}) => ({...node}));
    console.log({images});
    return images
      .filter(image => image.childImageSharp)
      .map(image => <InstafeedImage image={image} />);
  };

  render() {
    return (
      <div className="flex flex-wrap mh5 justify-center">
        <StaticQuery
          query={graphql`
            query {
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
          `}
          render={images => this._renderImages(images)}
        />
      </div>
    );
  }
}
