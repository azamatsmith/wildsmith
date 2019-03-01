import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link as GatsbyLink} from 'gatsby';

function Link({children, className, to}) {
  const internal = /^\/(?!\/)/.test(to);
  let props = internal ? {to} : {rel: 'noopener noreferrer', href: to};
  props = {...props, className: classNames('ws-link', className)};
  if (internal) {
    return <GatsbyLink {...props}>{children}</GatsbyLink>;
  }
  return <a {...props}>{children}</a>;
}

Link.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  to: PropTypes.string,
};

Link.defaultProps = {
  children: null,
  className: '',
  to: '/',
};

export default Link;
