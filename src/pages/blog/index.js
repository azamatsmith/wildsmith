import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'components';

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
        <Link className="pv2" to={fields.slug} key={fields.slug}>
          <div className="near-black f4">
            {frontmatter.title}-{frontmatter.author}-{frontmatter.date}
          </div>
          <div className="flex">{this._renderTags(fields.tags)}</div>
          <div className="mv3 pa3 br2 near-black bg-light-gray">{excerpt}</div>
        </Link>
      );
    });

  render() {
    console.log('blog index', this.props);
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
    allMarkdownRemark {
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
            title
          }
        }
      }
    }
  }
`;
