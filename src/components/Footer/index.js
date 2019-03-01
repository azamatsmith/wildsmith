import React from 'react';
// import PropTypes from 'prop-types';
import {Container, Link, P} from 'components';
import routes from 'utils/routes';
import styled from 'styled-components';

const StyledFooter = styled.footer``;

const Title = styled.h2``;

function Footer() {
  return (
    <StyledFooter className="bg-black pv5">
      <Container className="flex">
        <div className="w-50">
          <Title className="f2 fw4 white">About us</Title>
          <P className="gray">
            Wildsmith is the studio of the design and development duo,{' '}
            <Link to="https://twitter.com/azamatsmith">Matthew Smith</Link> and{' '}
            <Link to="https://twitter.com/rachelcope">Rachel Cope Smith</Link>{' '}
            and based in Denver, Colorado. We design and build digital products,
            services, and experiences that matter.
          </P>
          <P className="gray">
            Rachel has over 8 years of experience in UI, UX, product design, and
            strategy. She co-founded a web app and has worked as a design
            consultant with dozens of clients across the US, Europe, and Mexico.
          </P>
          <P className="gray">
            Matt is a full-stack developer. He has developed software for the US
            Air Force, Department of Veterans Affairs, numerous startups, as
            well as launched several of his own apps and projects.
          </P>
        </div>
        <div className="w-50">
          <ul className="pl0 list">
            <li className="lh-copy">
              <Link to={routes('blog')}>Blog</Link>
            </li>
            <li className="lh-copy">
              <Link to="https://www.instagram.com/wildsmith.studio/">
                Instagram
              </Link>
            </li>
            <li className="lh-copy">
              <Link to="https://www.linkedin.com/company/wildsmith-studio-llc">
                LinkedIn
              </Link>
            </li>
            <li>Twitter Matt and Rachel</li>
          </ul>
        </div>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
