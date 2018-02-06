import React from 'react';
import PropTypes from 'prop-types';
// test

export default class Icon extends React.Component {
  static propTypes = {
    name: PropTypes.oneOf(['instagram', 'linkedin', 'twitter']).isRequired,
  };

  render() {
    const src = require(`./images/${this.props.name}.svg`);
    return <img src={src} />;
  }
}
