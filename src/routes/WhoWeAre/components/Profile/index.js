import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import { Icon } from 'components';
import rachel from './images/rachel-profile.png'
import matt from './images/matt-profile.png'


export default class Profile extends React.Component {
  static propTypes = {
    extraStyles: PropTypes.string,
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    name: PropTypes.oneOf([
      'rachel',
      'matt'
    ]).isRequired,
  }

  render() {
    const { extraStyles, instagram, linkedin, name, twitter } = this.props;
    const image = name === 'rachel' ? rachel : matt;
    return (
      <div className={`Profile inline-flex flex-column ${extraStyles}`}>
        <img src={image} />
        <div className="flex justify-center">
          <a className="dim pointer ma3" href={instagram} target="_blank">
            <Icon name="instagram" />
          </a>
          <a className="dim pointer ma3" href={linkedin} target="_blank">
            <Icon name="linkedin" />
          </a>
          <a className="dim pointer ma3" href={twitter} target="_blank">
            <Icon name="twitter" />
          </a>
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query GatsbyImageSampleQuery {
    file {
      childImageSharp {
        resolutions(width: 125, height: 125) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`;
