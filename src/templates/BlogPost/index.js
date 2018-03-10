import React from 'react';
import PropTypes from 'prop-types';
import 'prismjs/themes/prism-solarizedlight.css';

export default class BlogPost extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    console.log(this.props);
    const {frontmatter, html} = this.props.data.markdownRemark;

    return (
      <div className="BlogPost">
        <h3>
          {frontmatter.author} - {frontmatter.date}
        </h3>
        <div dangerouslySetInnerHTML={{__html: html}} />
      </div>
    );
  }
}

export const query = graphql`
  query BlogPostTemplate($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        author
        categories
        date(formatString: "MMMM DD, YYYYY")
        title
      }
    }
  }
`;
