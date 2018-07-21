import React from 'react';
import PropTypes from 'prop-types';


export default class Alert extends React.Component {
  static propTypes = {
    alertType: PropTypes.oneOf(['warning', 'info', 'success']).isRequired;
    children: PropTypes.any.isRequired,
  }

  static defaultProps = {}

  render() {
    const { alertType, children } = this.props;
    return (
      <div className={`Alert Alert-${alertType}`}>
        {children}
      </div>
    );
  }
}
