import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link as GatsbyLink} from 'gatsby';
import './Navbar.scss';

export default class Navbar extends Component {
  static propTypes = {
    currentRoute: PropTypes.string,
  };

  static defaultProps = {};

  _getClass = path => {
    const active =
      path === this.props.currentRoute ||
      path === `${this.props.currentRoute}/`;
    const baseClass = `nav-link pointer link near-black b f6 f5-ns dib pt4 tc tl-ns mh2 mh4-ns pa1 ${
      active ? 'active' : ''
    }`;
    return baseClass;
  };

  render() {
    const {currentRoute} = this.props;
    return (
      <nav className="Navbar w-100">
        <div className="flex justify-around justify-end-ns mr5-ns">
          <GatsbyLink className={this._getClass('/')} to="/">
            home
          </GatsbyLink>
          <GatsbyLink
            className={this._getClass('/who-we-are/')}
            to="/who-we-are"
          >
            who we are
          </GatsbyLink>
          <GatsbyLink className={this._getClass('/contact/')} to="/contact">
            contact
          </GatsbyLink>
          <GatsbyLink className={this._getClass('/blog/')} to="/blog">
            blog
          </GatsbyLink>
        </div>
      </nav>
    );
  }
}
