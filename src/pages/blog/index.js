import React from 'react';
// import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import {BlogHero, BlogPostItem, Layout} from 'components';
import types from './_types';

export default class Blog extends React.Component {
  static propTypes = {
    ...types,
  };

  static defaultProps = {};

  // PRIVATE

  _renderTags = tags =>
    tags.map(tag => (
      <div className="ma2 br2 pa2 bg-blue white" key={tag}>
        {tag}
      </div>
    ));

  _renderPosts = () => {
    const posts = this.props.data.allMarkdownRemark.edges;
    return posts.map(
      ({node}, i) =>
        i === 0 ? (
          <BlogHero key={node.id} {...node} />
        ) : (
          <BlogPostItem key={node.id} {...node} />
        )
    );
  };

  render() {
    return (
      <Layout location={this.props.location}>
        <div className="Blog flex flex-column items-center">
          <div className="mt5 mb4 mh3 mh0-ns">{this._renderPosts()}</div>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
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
            title
          }
          timeToRead
        }
      }
    }
  }
`;
