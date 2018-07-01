import React, {Component} from 'react';
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
    const baseClass = `Navbar-link link-${index} link near-black b f6 f5-ns dib pt4 tc tl-ns`;
    const route = this.props.currentRoute.split('/')[1];
    return route === name ? `${baseClass} active` : baseClass;
  };

  render() {
    const width = '25%';
    return (
      <nav className="Navbar w-100 flex justify-around justify-end-ns">
        <div className="w-100 w-40-ns">
          <GatsbyLink className={this._getClass('', 0)} to="/" style={{width}}>
            home
          </GatsbyLink>
          <GatsbyLink
            className={this._getClass('who-we-are', 1)}
            to="/who-we-are"
            style={{width}}
          >
            who we are
          </GatsbyLink>
          <GatsbyLink
            className={this._getClass('contact', 2)}
            to="/contact"
            style={{width}}
          >
            contact
          </GatsbyLink>
          <GatsbyLink
            className={this._getClass('blog', 3)}
            to="/blog"
            style={{width}}
          >
            blog
          </GatsbyLink>
          <hr
            className="Navbar-hr mb0 bg-orange transition-3 bn"
            style={{height: '.25rem'}}
          />
        </div>
      </nav>
    );
  }
}
