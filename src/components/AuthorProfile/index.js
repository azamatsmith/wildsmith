import React from 'react';
import PropTypes from 'prop-types';
import ReactGravatar from 'react-gravatar';
import {personLookup} from 'helpers';

export default class AuthorProfile extends React.Component {
  static propTypes = {
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
  };

  render() {
    const {author, date, timeToRead} = this.props;
    if (!author) {
      return null;
    }
    const {email, role, title} = personLookup(author);
    return (
      <div className="AuthorProfile flex sans-serif near-black mt3 mb4">
        <ReactGravatar className="br-100" email={email} size={80} />
        <div className="flex flex-column justify-between pl3 pv1">
          <h3 className="mv0">{author}</h3>
          <p className="mv0">
            {title} | {role}
          </p>
          <p className="mv0">
            {date} · {timeToRead} min{timeToRead === 1 ? '' : 's'}
          </p>
        </div>
      </div>
    );
  }
}
