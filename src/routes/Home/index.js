import React, {Component} from 'react';
import {NewInstafeed, TitleText} from 'components';
import ImagesType from 'components/NewInstafeed/types';
import PropTypes from 'prop-types';
import './Home.scss';

export default class Home extends Component {
  static propTypes = {
    ...ImagesType,
  };

  static defaultProps = {};

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
      <div className="Home flex flex-column justify-center items-center">
        <div className="Home-text-wrapper relative mb2 mt2 tc mb0-ns mt6-ns">
          <TitleText fontWeight="bold">we are wildsmith.</TitleText>
          <div className={highlightClass} />
        </div>
        <p className="mt-2 mb7 sans-serif near-black">
          Product Stategy | UX Design | Development
        </p>
        <NewInstafeed data={this.props.data} />
      </div>
    );
  }
}
