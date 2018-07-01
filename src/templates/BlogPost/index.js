import React from 'react';
// import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';
import {Container} from 'components';
import 'prismjs/themes/prism-solarizedlight.css';
import types from './types';
import './BlogPost.scss';

export default class BlogPost extends React.Component {
  static propTypes = {
    ...types,
  };

  static defaultProps = {};

  _renderImage = image => (
    <div className="mw7 center">
      <GatsbyImage sizes={image.childImageSharp.sizes} />
    </div>
  );

  _renderTags = tags =>
    tags.map(tag => (
      <span className="pa2" key={tag}>
        {tag}
      </span>
    ));

  render() {
    const {fields, frontmatter, html} = this.props.data.markdownRemark;
    const {tags} = fields;

    return (
      <div className="BlogPost pt5">
        {frontmatter.image && this._renderImage(frontmatter.image)}

        <Container className="flex flex-column w-100 ma0">
          <h3>
            {frontmatter.author} - {frontmatter.date}
          </h3>
          <p>{tags.length && this._renderTags(tags)}</p>
          <div
            className="BlogPost-body"
            dangerouslySetInnerHTML={{__html: html}}
          />
        </Container>
      </div>
    );
  }
}

export const query = graphql`
  query BlogPostTemplate($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      fields {
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
        subTitle
        title
      }
    }
  }
`;
