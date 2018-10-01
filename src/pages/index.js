import React from 'react';
import {Layout} from 'components';
import {Home} from 'routes';

export default ({location}) => (
  <Layout location={location}>
    <Home />
  </Layout>
);
