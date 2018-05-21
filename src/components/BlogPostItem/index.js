import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import GatsbyImage from 'gatsby-image';
import {P} from 'components';
import types from './types';

export default class BlogPostItem extends React.Component {
  static propTypes = {
    excerpt: PropTypes.string,
    fields: PropTypes.shape({
      slug: PropTypes.string,
      tags: PropTypes.array,
    }),
    frontmatter: PropTypes.shape({
      author: PropTypes.string,
      date: PropTypes.string,
      image: PropTypes.any,
      title: PropTypes.string,
    }),
    timeToRead: PropTypes.number,
  };

  render() {
    const {fields, frontmatter, timeToRead} = this.props;
    return (
      <div className="BlogPostItem pa3 mv3 shadow-1 ba br2 b--light-gray">
        <div className="flex flex-column">
          <P>{frontmatter.author}</P>
          <P>
            {frontmatter.date} · {timeToRead} min
          </P>
        </div>
        <GatsbyLink className="pointer no-underline" to={fields.slug}>
          <GatsbyImage sizes={frontmatter.image.childImageSharp.sizes} />
          <h3 className="mt3 mb0 mid-gray sans-serif">{frontmatter.title}</h3>
        </GatsbyLink>
      </div>
    );
  }
}
