import React from 'react';
import {
  ContactForm,
  HomepageHero,
  Instafeed,
  Layout,
  WhatWeDo,
} from 'components';

export default ({location}) => (
  <Layout location={location}>
    <HomepageHero />
    <WhatWeDo />
    <Instafeed />
    <ContactForm />
  </Layout>
);
