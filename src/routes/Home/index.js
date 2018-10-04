import React, {Component} from 'react';
import {Instafeed, TitleText, UnderlineHighlight} from 'components';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="flex flex-column justify-center items-center vh-100">
          <div className="Home-text-wrapper relative mb2 mt2 tc mb0-ns mt6-ns">
            <TitleText fontWeight="bold">
              we are <UnderlineHighlight>wild</UnderlineHighlight>
              smith.
            </TitleText>
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
