import React from 'react';
// import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import GatsbyImage from 'gatsby-image';
import Disqus from 'disqus-react';
import {AuthorProfile, Container, Layout, SEO} from 'components';
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
      excerpt,
      fields,
      frontmatter,
      html,
      timeToRead,
    } = this.props.data.markdownRemark;
    // const {tags} = fields;
    // <p>{tags.length && this._renderTags(tags)}</p>

    return (
      <Layout>
        <div className="BlogPost pt5 sans-serif">
          <div className="ph3 mw7 center-ns">
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

          {/* <!-- convert to Container --> */}
          <div className="mw7-ns center pa3 ph5-ns flex flex-column w-100 ma0">
            <div
              className="BlogPost-body mb4"
              dangerouslySetInnerHTML={{__html: html}}
            />

            <Disqus.DiscussionEmbed
              shortname={'wildsmithstudio'}
              config={this._disqusConfig()}
            />
          </div>
          <SEO
            excerpt={excerpt}
            isBlogPost={true}
            {...frontmatter}
            slug={fields.slug}
            title={frontmatter.title}
          />
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query BlogPostTemplate($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      excerpt
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
