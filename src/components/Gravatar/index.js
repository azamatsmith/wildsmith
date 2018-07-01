import React from 'react';
import PropTypes from 'prop-types';
import ReactGravatar from 'react-gravatar';

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

  _lookup = () => {
    const table = {
      'matthew smith': 'azamatsmith@gmail.com',
      'matt smith': 'azamatsmith@gmail.com',
      'rachel cope': 'rachelcope@gmail.com',
    };

    const email = table[this.props.author.toLowerCase()];
    return email;
  };

  render() {
    const {author, className, size, ...rest} = this.props;
    const email = this._lookup();

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
