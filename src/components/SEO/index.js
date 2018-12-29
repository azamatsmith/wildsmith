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

  // _getSchema = ({imageSrc, url, person}) => {
  //   // const image = this._getProperty('image');
  //   // const date = moment(this.props.date, 'MMMM Do YYYY').format();
  //   console.log({person});
  //   return {
  //     '@context': 'http://schema.org',
  //     '@type': 'BlogPosting',
  //     mainEntityOfPage: {
  //       '@type': 'WebPage',
  //       '@id': url,
  //     },
  //     headline: '',
  //     image: [imageSrc && imageSrc],
  //     // datePublished: date,
  //     // if article modified after release
  //     // "dateModified": "2018-11-14T09:20:00+08:00",
  //     author: {
  //       '@type': 'Person',
  //       // name: this._getProperty('author'),
  //     },
  //     publisher: {
  //       '@type': 'Organization',
  //       name: 'Wildsmith Studio',
  //       logo: {
  //         '@type': 'ImageObject',
  //         url: '',
  //         // '',
  //       },
  //     },
  //     // description: this._getProperty('description'),
  //   };
  // };

  render() {
    const {
      author,
      // description,
      excerpt,
      // keywords,
      image,
      isBlogPost,
      slug,
      title,
    } = this.props;
    const BASE_URL = `https://wildsmithstudio.com`;
    const url = `${BASE_URL}${slug}`;
    const person = personLookup(author);
    let imageSrc =
      image && image.childImageSharp ? image.childImageSharp.sizes.src : null;
    imageSrc = imageSrc ? `${BASE_URL}${imageSrc}` : imageSrc;
    // const schema = this._getSchema({imageSrc, url, person});
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
        <meta name="twitter:image" content={imageSrc} />

        <meta
          name="google-site-verification"
          content="suN54CQEQShPSHv4aERWv0bskIBSLOiESbfYeNXHdNc"
        />
      </Helmet>
    );
  }
}
