import React from 'react';
import {ContactForm, HomepageHero, Instafeed, Layout} from 'components';

export default ({location}) => (
  <Layout location={location}>
    <HomepageHero />
    <ContactForm />
    <Instafeed />
  </Layout>
);
