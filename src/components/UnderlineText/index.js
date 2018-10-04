import React from 'react';
import PropTypes from 'prop-types';
import {TitleText} from 'components';
import './UnderlineText.scss';

export default class UnderlineText extends React.Component {
  static propTypes = {
    extraStyles: PropTypes.string,
    text: PropTypes.string.isRequired,
    highlightStyle: PropTypes.object,
  };

  static defaultProps = {
    extraStyles: '',
    highlightStyle: {},
  };

  render() {
    const {extraStyles, highlightStyle, text} = this.props;
    const thisHighlightStyle = {
      ...highlightStyle,
    };
    return (
      <div className={`UnderlineText flex flex-column relative ${extraStyles}`}>
        <TitleText>{text}</TitleText>
        <div
          className="UnderlineText-highlight bg-orange absolute"
          style={thisHighlightStyle}
        />
      </div>
    );
  }
}
