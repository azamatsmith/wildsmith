import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';
import GatsbyLink from 'gatsby-link';
import {Gravatar} from 'components';

export default class BlogHero extends React.Component {
  static propTypes = {
    frontmatter: PropTypes.shape({
      image: PropTypes.any,
    }).isRequired,
  };

  static defaultProps = {};

  render() {
    console.log(this.props);
    const {excerpt, fields, frontmatter, timeToRead} = this.props;
    const {date, image, title} = frontmatter;
    return (
      <GatsbyLink
        className="BlogHero w-100 flex flex-column no-underline  sans-serif mb5 br1 near-black bg-near-white translate-y-2"
        to={fields.slug}
        style={{maxWidth: '36rem'}}
      >
        <GatsbyImage
          sizes={image.childImageSharp.sizes}
          className="br1 br--top"
        />
        <div className="pa3">
          <h1 className="mb0">{title}</h1>
          <p className="f4">{excerpt}</p>
          <div className="flex items-center">
            <Gravatar
              className="br-100"
              author={frontmatter.author}
              size={25}
            />
            <span className="ml2">{frontmatter.author}</span>
            <span className="ml3">
              {date} · {timeToRead} min{timeToRead === 1 ? '' : 's'}
            </span>
          </div>
        </div>
      </GatsbyLink>
    );
  }
}
