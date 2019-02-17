import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Footer, SEO, Manifest} from 'components';
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
    const {children} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div
          className="Layout sans-serif flex flex-column"
          style={{minHeight: '100vh'}}
        >
          <SEO />
          <Manifest />
          <div className="flex flex-column flex-1">{children}</div>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;
