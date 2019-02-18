import React from 'react';
// import PropTypes from 'prop-types';
import {Container, P} from 'components';

function Footer() {
  return (
    <footer>
      <Container>
        <div className="w-50">
          About
          <p>lorem</p>
        </div>
        <div className="w-50">
          <ul className="pl0">
            <li>Blog</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Twitter Matt and Rachel</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
