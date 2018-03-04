import React, {Component} from 'react';
import Helmet from 'react-helmet';
import Manifest from './components/Manifest';
import config from './config';

class SEO extends Component {
  render() {
    const {description, keywords} = config;
    return (
      <Helmet>
        {/* General tags */}
        <title>Wildsmith Studio</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta
          name="google-site-verification"
          content="suN54CQEQShPSHv4aERWv0bskIBSLOiESbfYeNXHdNc"
        />
        <Manifest />
      </Helmet>
    );
  }
}

export default SEO;

// TODO: Add these later
// <meta name="image" content={image} />
// <meta
//   property="fb:app_id"
//   content={config.siteFBAppID ? config.siteFBAppID : ''}
// />
// <meta
//   name="twitter:creator"
//   content={config.userTwitter ? config.userTwitter : ''}
// />
// {postSEO ? <meta property="og:type" content="article" /> : null}
// {/* Twitter Card tags */}
// <meta name="twitter:card" content="summary_large_image" />
// <meta name="twitter:title" content={title} />
// <meta name="twitter:description" content={description} />
// <meta name="twitter:image" content={image} />
// {/* Schema.org tags */}
// <script type="application/ld+json">
//   {JSON.stringify(schemaOrgJSONLD)}
// </script>

// {/* OpenGraph tags */}
// <meta property="og:url" content={postSEO ? postURL : blogURL} />
// <meta property="og:title" content={title} />
// <meta property="og:description" content={description} />
// <meta property="og:image" content={image} />
