import React from 'react';
import PropTypes from 'prop-types';
import ReactGravatar from 'react-gravatar';
import {personLookup} from 'helpers';

export default class Gravatar extends React.Component {
  static propTypes = {
    author: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.number,
  };

  static defaultProps = {
    author: null,
    className: null,
    size: 50,
  };

  render() {
    const {author, className, size, ...rest} = this.props;
    const {email} = personLookup(author);

    if (!email) {
      return null;
    }

    return (
      <div className={`Gravatar ${className}`}>
        <ReactGravatar className="br-100" email={email} size={size} {...rest} />
      </div>
    );
  }
}
