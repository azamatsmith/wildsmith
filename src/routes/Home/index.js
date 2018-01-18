import React, { Component } from 'react';
import { TitleText } from 'components';
import PropTypes from 'prop-types';
import './Home.css';

export default class Home extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {};

  render() {
    return (
      <div className="Home">
        <TitleText fontWeight="bold">we are wildsmith.</TitleText>
      </div>
    );
  }
}
