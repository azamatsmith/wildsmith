import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {Header, Footer, SEO, Manifest, Navbar} from 'components';
import '../styles/main.scss';

class TemplateWrapper extends Component {
  static propTypes = {
    children: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  };

  render() {
    const {children, location} = this.props;
    return (
      <div className="Template flex flex-column" style={{minHeight: '100vh'}}>
        <SEO />
        <Manifest />
        <Navbar currentRoute={location.pathname} />
        <div className="flex flex-column flex-1">{children()}</div>
        <Footer />
      </div>
    );
  }
}

export default TemplateWrapper;
