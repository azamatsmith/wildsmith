import React, {Component} from 'react';
import {Instafeed, TitleText} from 'components';
import PropTypes from 'prop-types';
import './Home.scss';

export default class Home extends Component {
  state = {
    highlightActive: false,
  };

  mounted = true;

  componentDidMount() {
    setTimeout(() => {
      if (this.mounted) {
        this.setState({highlightActive: true});
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const {highlightActive} = this.state;
    const highlightClass = `Home-underline bg-orange absolute ${
      highlightActive ? 'active' : ''
    }`;
    return (
      <div className="Home">
        <div className="flex flex-column justify-center items-center vh-100">
          <div className="Home-text-wrapper relative mb2 mt2 tc mb0-ns mt6-ns">
            <TitleText fontWeight="bold">we are wildsmith.</TitleText>
            <div className={highlightClass} />
          </div>
          <p className="mt-2 mb7 sans-serif near-black">
            Product Stategy | UX Design | Development
          </p>
        </div>
        <Instafeed />
      </div>
    );
  }
}
