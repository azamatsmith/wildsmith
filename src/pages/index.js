import React from 'react';
import {HomepageHero, Instafeed, Layout} from 'components';
// import {Home} from 'routes';

export default ({location}) => (
  <Layout location={location}>
    <HomepageHero />
    <Instafeed />
  </Layout>
);
