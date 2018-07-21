import React from 'react';
import PropTypes from 'prop-types';

export default class Tag extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    link: PropTypes.bool,
  };

  static defaultProps = {
    children: null,
    link: false,
  };

  state = {};

  render() {
    const {children, link} = this.props;
    const baseStyles = 'Tag pa1 bg-orange near-black br2 f6';
    const linkStyles = 'bg-animate hover-bg-gold pointer';
    return (
      <div className={`${baseStyles} ${link ? linkStyles : ''}`}>
        {children}
      </div>
    );
  }
}
