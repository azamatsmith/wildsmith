import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import GatsbyLink from 'gatsby-link';
import Image from 'gatsby-image';
import {Icon} from 'components';

export default class Profile extends React.Component {
  static propTypes = {
    extraStyles: PropTypes.string,
    image: PropTypes.shape({
      resolutions: PropTypes.object,
    }),
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    name: PropTypes.oneOf(['rachel', 'matt']).isRequired,
  };

  render() {
    const {extraStyles, image, instagram, linkedin, name, twitter} = this.props;
    const linkStyle = 'dim link pointer ma3';

    return (
      <div className={`Profile flex flex-column ${extraStyles}`}>
        <Image resolutions={image.resolutions} />
        <div className="flex justify-center items-center">
          <a className={linkStyle} href={instagram} target="_blank">
            <Icon name="instagram" />
          </a>
          <a className={linkStyle} href={linkedin} target="_blank">
            <Icon name="linkedin" />
          </a>
          <a className={linkStyle} href={twitter} target="_blank">
            <Icon name="twitter" />
          </a>
        </div>
      </div>
    );
  }
}

export const profileImageFragment = graphql`
  fragment ProfileImage on Query {
    mattProfile: imageSharp(
      fluid: {originalName: {regex: "/matt-profile.png/"}}
    ) {
      resolutions(width: 339, height: 339) {
        ...GatsbyImageSharpResolutions
      }
    }
    rachelProfile: imageSharp(
      fluid: {originalName: {regex: "/rachel-profile.png/"}}
    ) {
      resolutions(width: 339, height: 339) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
