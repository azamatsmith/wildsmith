import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Footer, SEO, Manifest, Navbar} from 'components';
import {ThemeProvider} from 'styled-components';
import theme from 'styles/theme';
import 'styles/main.scss';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  };

  static defaultProps = {
    location: {
      pathname: '',
    },
  };

  render() {
    const {children, location} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div className="Layout flex flex-column" style={{minHeight: '100vh'}}>
          <SEO />
          <Manifest />
          <Navbar currentRoute={location.pathname} />
          <div className="flex flex-column flex-1">{children}</div>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;
