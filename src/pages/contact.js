import React from 'react';
import {Layout} from 'components';
import {Contact} from 'routes';

export default ({location}) => (
  <Layout location={location}>
    <Contact />
  </Layout>
);
