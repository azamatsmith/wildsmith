import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';

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
      <GatsbyLink className={`link pink dim ${className}`} {...rest}>
        {children}
      </GatsbyLink>
    );
  }
}
