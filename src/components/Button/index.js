import React from 'react';
import PropTypes from 'prop-types';
import loadingIcon from './loading.svg';


export default class Button extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    extraStyles: PropTypes.string,
    loading: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    extraStyles: '',
    loading: false,
  }

  _renderLoading = () => (
    <img src={loadingIcon} />
  )

  render() {
    const { children, extraStyles, loading, ...rest } = this.props;
    return (
      <button
        className={`pv3 ph5 bg-orange white br2 ba b--orange dim sans-serif pointer ${extraStyles}`}
        {...rest}
      >
        {loading ? this._renderLoading() : children}
      </button>
    );
  }
}
