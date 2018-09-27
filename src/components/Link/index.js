import React from 'react';
import PropTypes from 'prop-types';
import {Link as GatsbyLink} from 'gatsby';

export default class Link extends React.Component {
  static propTypes = {
    to: PropTypes.string,
  };

  static defaultProps = {
    to: '/',
  };

  render() {
    const {children, className, ...rest} = this.props;
    return (
      <GatsbyLink className={`ws-link ${className}`} {...rest}>
        {children}
      </GatsbyLink>
    );
  }
}
