import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {personLookup} from 'helpers';

export default class SEO extends React.Component {
  static propTypes = {
    description: PropTypes.string,
    image: PropTypes.any,
    isBlogPost: PropTypes.bool,
  };

  static defaultProps = {
    description: '',
    isBlogPost: false,
  };

  render() {
    const {author, description, image, isBlogPost, slug, title} = this.props;
    const url = `https://wildsmithstudio.com${slug}`;
    const {twitterHandle} = personLookup(author);
    const imageSrc = image.childImageSharp.sizes.src;
    // <meta property="fb:app_id" content={config.fbAppID} />
    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={imageSrc} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost && <meta property="og:type" content="article" />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageSrc} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterHandle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageSrc} />
      </Helmet>
    );
  }
}
