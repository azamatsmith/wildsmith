import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import Helmet from 'react-helmet';
import client from 'utils/apollo';

import { Header, Footer, Navbar } from 'components';
import '../styles/main.scss';

class TemplateWrapper extends Component {
  static propTypes = {
    children: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  };

  render() {
    const { children, location } = this.props;
    return (
      <ApolloProvider client={client}>
        <div className="Template">
          <Helmet
            title="Wildsmith Studio"
            meta={[
              { name: 'description', content: 'Wildsmith Studio' },
              {
                name: 'keywords',
                content: 'Design, Development, UI, UX, App, Denver, Colorado',
              },
            ]}
          />
          <Navbar currentRoute={location.pathname} />
          <Header />
          <div>{children()}</div>
          <Footer />
        </div>
      </ApolloProvider>
    );
  }
}

export default TemplateWrapper;
