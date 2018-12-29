import React from 'react';
import PropTypes from 'prop-types';

export default class Icon extends React.Component {
  static propTypes = {
    name: PropTypes.oneOf(['instagram', 'linkedin', 'twitter']).isRequired,
  };

  render() {
    const {name} = this.props;
    const src = require(`./images/${name}.svg`);
    return <img alt={`${name} icon`} src={src} />;
  }
}
