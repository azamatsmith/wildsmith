import React, { Component } from 'react';
import { TitleText } from 'components';
import PropTypes from 'prop-types';
import './Home.css';

export default class Home extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    highlightActive: false
  };

  mounted = true;

  componentDidMount() {
    setTimeout(() => {
      if (this.mounted) {
        this.setState({ highlightActive: true });
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { highlightActive } = this.state;
    const highlightClass = `Home-underline ${highlightActive ? 'active' : '' }`;
    return (
      <div className="Home">
        <div className="Home-text-wrapper">
          <TitleText fontWeight="bold">
            we are wildsmith.
          </TitleText>
          <div className={highlightClass} />
        </div>
      </div>
    );
  }
}
