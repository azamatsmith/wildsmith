import React from 'react';
import {HomepageHero, Layout} from 'components';
// import {Home} from 'routes';

export default ({location}) => (
  <Layout location={location}>
    <HomepageHero />
  </Layout>
);
