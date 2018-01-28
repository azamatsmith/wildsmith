import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
// import './Navbar.css'


export default class Navbar extends Component {
  static propTypes = {
    currentRoute: PropTypes.string,
  }

  static defaultProps = {}

  // PRIVATE

  _isActive = (name) => (
    this.props.currentRoute === name
  )


  render() {
    const baseClass = "link dim black b f6 f5-ns dib mr3";
    return (
      <nav className="Navbar">
        <GatsbyLink
          className={`${baseClass} ${this._isActive('/') ? 'blue' : null }` }
          to="/"
        >
          home
        </GatsbyLink>
        <GatsbyLink
          className={`${baseClass} ${this._isActive('/select-work') ? 'blue' : null }` }
          to="/select-work"
        >
          select work
        </GatsbyLink>
        <GatsbyLink
          className={`${baseClass} ${this._isActive('/who-we-are') ? 'blue' : null }` }
          to="/who-we-are"
        >
          who we are
        </GatsbyLink>
        <GatsbyLink
          className={`${baseClass} ${this._isActive('/contact') ? 'blue' : null }` }
          to="/contact"
        >
          contact
        </GatsbyLink>
      </nav>
    );
  }
}
