import React from 'react';
// import PropTypes from 'prop-types';
import {BlogPostItem} from 'components';

export default class Blog extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  // PRIVATE

  _renderTags = tags =>
    tags.map(tag => (
      <div className="ma2 br2 pa2 bg-blue white" key={tag}>
        {tag}
      </div>
    ));

  _renderPosts = () =>
    this.props.data.allMarkdownRemark.edges.map(({node}) => {
      const {excerpt, fields, frontmatter} = node;
      return (
        <BlogPostItem
          key={`${node.frontmatter.date}-${node.frontmatter.title}`}
          {...node}
        />
      );
    });

  render() {
    return (
      <div className="Blog flex">
        <div className="w-30" />
        <div className="w-50 pv5">{this._renderPosts()}</div>
      </div>
    );
  }
}

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
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
            subTitle
            title
          }
          timeToRead
        }
      }
    }
  }
`;
