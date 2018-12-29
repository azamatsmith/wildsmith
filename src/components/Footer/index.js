import React from 'react';
// import PropTypes from 'prop-types';
import {P} from 'components';

export default class Footer extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const year = new Date().getFullYear();
    return (
      <footer className="bg-moon-gray pa3 mt7 flex items-center justify-center">
        <P>© {year} Wildsmith Studio</P>
      </footer>
    );
  }
}
