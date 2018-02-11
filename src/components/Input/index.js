import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

export default class Input extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    textarea: PropTypes.bool,
  };

  static defaultProps = {
    label: null,
    textarea: false,
  };

  // PRIVATE

  _renderLabel = () => (
    <label className="f4 sans-serif mid-gray fw3 pv3">{this.props.label}</label>
  );

  render() {
    const {label, textarea, ...rest} = this.props;
    const baseClass = 'ba br2 b--light-gray pa3 mid-gray outline-0';
    return (
      <div className="Input flex flex-column mt3">
        {label ? this._renderLabel() : null}
        {textarea ? (
          <textarea rows="8" className={baseClass} {...rest} />
        ) : (
          <input className={baseClass} {...rest} />
        )}
      </div>
    );
  }
}
