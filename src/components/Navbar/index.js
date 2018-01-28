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

  _getClass = (name) => {
    const baseClass = "link dim black b f6 f5-ns dib mr3";
    return this.props.currentRoute === name
      ?  `${baseClass} blue`
      : baseClass;
  }


  render() {
    return (
      <nav className="Navbar">
        <GatsbyLink
          className={this._getClass('/')}
          to="/"
        >
          home
        </GatsbyLink>
        <GatsbyLink
          className={this._getClass('/select-work')}
          to="/select-work"
        >
          select work
        </GatsbyLink>
        <GatsbyLink
          className={this._getClass('/who-we-are')}
          to="/who-we-are"
        >
          who we are
        </GatsbyLink>
        <GatsbyLink
          className={this._getClass('/contact')}
          to="/contact"
        >
          contact
        </GatsbyLink>
      </nav>
    );
  }
}
