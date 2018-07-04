import React from 'react';
// import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';
import Disqus from 'disqus-react';
import {AuthorProfile, Container, SEO} from 'components';
import 'prismjs/themes/prism-solarizedlight.css';
import types from './types';
import './BlogPost.scss';

export default class BlogPost extends React.Component {
  static propTypes = {
    ...types,
  };

  static defaultProps = {};

  _renderImage = image => <GatsbyImage sizes={image.childImageSharp.sizes} />;

  _renderTags = tags =>
    tags.map(tag => (
      <span className="pa2" key={tag}>
        {tag}
      </span>
    ));

  _disqusConfig = () => {
    const {fields, frontmatter} = this.props.data.markdownRemark;
    return {
      url: '',
      identifier: fields.slug,
      title: frontmatter.title,
    };
  };

  render() {
    const {
      fields,
      frontmatter,
      html,
      timeToRead,
    } = this.props.data.markdownRemark;
    // const {tags} = fields;
    // <p>{tags.length && this._renderTags(tags)}</p>

    return (
      <div className="BlogPost pt5 sans-serif">
        <div className="mw7 center">
          <AuthorProfile
            author={frontmatter.author}
            date={frontmatter.date}
            timeToRead={timeToRead}
          />
          <h1 className={`${frontmatter.subTitle ? 'mb2' : 'mb4'}`}>
            {frontmatter.title}
          </h1>
          {frontmatter.subTitle && <h2>{frontmatter.subTitle}</h2>}
          {frontmatter.image && this._renderImage(frontmatter.image)}
        </div>

        <Container className="flex flex-column w-100 ma0">
          <div
            className="BlogPost-body mb4"
            dangerouslySetInnerHTML={{__html: html}}
          />

          <Disqus.DiscussionEmbed
            shortname={'wildsmithstudio'}
            config={this._disqusConfig()}
          />
        </Container>
        <SEO isBlogPost={true} {...frontmatter} slug={fields.slug} />
      </div>
    );
  }
}

export const query = graphql`
  query BlogPostTemplate($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      timeToRead
      fields {
        slug
        tags
      }
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            sizes(maxWidth: 786) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        title
      }
    }
  }
`;
