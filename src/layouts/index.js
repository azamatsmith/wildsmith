import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import Helmet from 'react-helmet';
import client from 'utils/apollo';

import Header from '../components/Header';
import '../styles/main.scss';

const TemplateWrapper = ({ children }) => (
  <ApolloProvider client={client}>
    <div>
      <Helmet
        title="wildsmith studio"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <div>{children()}</div>
    </div>
  </ApolloProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
