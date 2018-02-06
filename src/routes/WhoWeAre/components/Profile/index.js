import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import Image from 'gatsby-image';
import { Icon } from 'components';
import './Profile.scss';

export default class Profile extends React.Component {
  static propTypes = {
    extraStyles: PropTypes.string,
    image: PropTypes.shape({
      sizes: PropTypes.object,
    }),
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    name: PropTypes.oneOf(['rachel', 'matt']).isRequired,
  };

  render() {
    const {
      extraStyles,
      image,
      instagram,
      linkedin,
      name,
      twitter,
    } = this.props;
    const linkStyle = 'dim link pointer ma3';

    return (
      <div className={`Profile flex flex-column ${extraStyles}`}>
        <Image sizes={image.sizes} />
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
