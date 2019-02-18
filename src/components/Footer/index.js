import React from 'react';
// import PropTypes from 'prop-types';
import {Container, Link, P} from 'components';
import routes from 'utils/routes';

function Footer() {
  return (
    <footer>
      <Container className="flex">
        <div className="w-50">
          About
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </P>
        </div>
        <div className="w-50">
          <ul className="pl0 list">
            <li>
              <Link to={routes('blog')}>Blog</Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/wildsmith.studio/">
                Instagram
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/company/wildsmith-studio-llc">
                LinkedIn
              </Link>
            </li>
            <li>Twitter Matt and Rachel</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
