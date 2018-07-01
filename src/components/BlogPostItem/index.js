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

  state = {hovered: false};

  render() {
    const {fields, frontmatter, timeToRead} = this.props;
    const {hovered} = this.state;
    const imageWrapperStyle = {
      // transform: `scale(${hovered ? '1.05' : '1'})`,
      // transition: 'transform 250ms ease-out',
    };
    return (
      <GatsbyLink
        className="BlogPostItem flex pa3 mv3 ba br2 b--light-gray pointer no-underline translate-y-2"
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}
        to={fields.slug}
      >
        <div className="flex  flex-column w-70 justify-between">
          <h3 className="mt3 mb0 mid-gray sans-serif mr2">
            {frontmatter.title}
          </h3>
          <div className="sans-serif near-black">
            <p className="mv1 f4">{frontmatter.author}</p>
            <p className="mt1 mb0">
              {frontmatter.date} · {timeToRead} min
            </p>
          </div>
        </div>
        <div
          className="w-30 flex flex-column justify-center"
          style={imageWrapperStyle}
        >
          <GatsbyImage sizes={frontmatter.image.childImageSharp.sizes} />
        </div>
      </GatsbyLink>
    );
  }
}
