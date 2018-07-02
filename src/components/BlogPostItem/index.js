import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import GatsbyImage from 'gatsby-image';
import {Gravatar} from 'components';
// import types from './types';

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
      subTitle: PropTypes.string,
      title: PropTypes.string,
    }),
    timeToRead: PropTypes.number,
  };

  defaultProps = {
    frontmatter: {
      subTitle: null,
    },
  };

  state = {hovered: false};

  _renderSubtitle = subTitle => (
    <h4 className="mt1 mb3 sans-serif mr4 f6 gray">{subTitle}</h4>
  );

  render() {
    const {fields, frontmatter, timeToRead} = this.props;
    const {hovered} = this.state;
    const imageWrapperStyle = {
      transform: `scale(${hovered ? '1.02' : '1'})`,
      opacity: `${hovered ? 1 : 0.8}`,
      transition: 'all 250ms ease-out',
    };
    return (
      <GatsbyLink
        className="BlogPostItem bg-near-white flex pa3 mv4 br2 pointer no-underline translate-y-2"
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}
        to={fields.slug}
      >
        <div className="flex  flex-column w-70 justify-between">
          <h3 className="mt3 mb0 mid-gray sans-serif mr4">
            {frontmatter.title}
          </h3>
          {frontmatter.subTitle && this._renderSubtitle(frontmatter.subTitle)}
          <div className="sans-serif near-black">
            <div className="flex items-center mv1 f4">
              <Gravatar
                author={frontmatter.author}
                className="mr1 mt1"
                size={20}
              />
              <span>{frontmatter.author}</span>
            </div>
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
