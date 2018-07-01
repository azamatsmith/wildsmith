import React from 'react';
// import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';
import {Container} from 'components';
import 'prismjs/themes/prism-solarizedlight.css';
import types from './types';

export default class BlogPost extends React.Component {
  static propTypes = {
    ...types,
  };

  static defaultProps = {};

  _renderImage = image => <GatsbyImage sizes={image.childImageSharp.sizes} />;

  render() {
    const {fields, frontmatter, html} = this.props.data.markdownRemark;

    return (
      <Container className="BlogPost">
        <h3>
          {frontmatter.author} - {frontmatter.date}
        </h3>
        {frontmatter.image && this._renderImage(frontmatter.image)}
        <p>
          {fields.tags.map(tag => (
            <span className="pa2" key={tag}>
              {tag}
            </span>
          ))}
        </p>
        <div dangerouslySetInnerHTML={{__html: html}} />
      </Container>
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
