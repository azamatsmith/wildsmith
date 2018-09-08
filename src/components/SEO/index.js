import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {personLookup} from 'helpers';
import config from './config';

export default class SEO extends React.Component {
  static propTypes = {
    description: PropTypes.string,
    excerpt: PropTypes.string,
    image: PropTypes.any,
    keywords: PropTypes.string,
    isBlogPost: PropTypes.bool,
    title: PropTypes.string,
  };

  static defaultProps = {
    description: null,
    excerpt: null,
    keywords: null,
    isBlogPost: false,
    title: null,
  };

  render() {
    const {
      author,
      description,
      excerpt,
      keywords,
      image,
      isBlogPost,
      slug,
      title,
    } = this.props;
    const url = `https://wildsmithstudio.com${slug}`;
    const person = personLookup(author);
    const imageSrc =
      image && image.childImageSharp ? image.childImageSharp.sizes.src : null;
    // <meta property="fb:app_id" content={config.fbAppID} />

    // defaults
    const thisDescription = excerpt || config.description;
    // const theseKeywords = keywords || config.keywords;

    return (
      <Helmet>
        <html lang="en" />
        <title>{title || 'Wildsmith Studio'}</title>
        {/* General tags */}
        <meta name="description" content={thisDescription} />
        <meta name="image" content={imageSrc} />

        {/* OpenGraph tags */}
        <meta name="og:site_name" content="Wildsmith Studio" />
        <meta property="og:url" content={url} />
        {isBlogPost && <meta property="og:type" content="article" />}
        {isBlogPost && <meta name="article:author" content={author} />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={thisDescription} />
        <meta property="og:image" content={imageSrc} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={person ? person.twitterHandle : '@azamatsmith'}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={thisDescription} />
        <meta
          name="twitter:image"
          content={`https://wildsmithstudio.com${imageSrc}`}
        />

        <meta
          name="google-site-verification"
          content="suN54CQEQShPSHv4aERWv0bskIBSLOiESbfYeNXHdNc"
        />
      </Helmet>
    );
  }
}
