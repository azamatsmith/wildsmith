import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import './Navbar.scss';

export default class Navbar extends Component {
  static propTypes = {
    currentRoute: PropTypes.string,
  };

  static defaultProps = {};

  // PRIVATE

  _getClass = (name, index) => {
    const baseClass = `Navbar-link link-${index} w-25 link black b f6 f5-ns dib pt4`;
    return this.props.currentRoute === name ? `${baseClass} active` : baseClass;
  };

  render() {
    return (
      <nav className="Navbar w-100 flex justify-end">
        <div className="w-50">
          <GatsbyLink className={this._getClass('/', 0)} to="/">
            home
          </GatsbyLink>
          <GatsbyLink
            className={this._getClass('/select-work', 1)}
            to="/select-work"
          >
            select work
          </GatsbyLink>
          <GatsbyLink
            className={this._getClass('/who-we-are', 2)}
            to="/who-we-are"
          >
            who we are
          </GatsbyLink>
          <GatsbyLink className={this._getClass('/contact', 3)} to="/contact">
            contact
          </GatsbyLink>
          <hr
            className="Navbar-hr mb0 bg-orange transition-3 bn"
            style={{ height: '.25rem' }}
          />
        </div>
      </nav>
    );
  }
}
