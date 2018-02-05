import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Recaptcha from 'react-recaptcha';
import { Button, Email, Input } from 'components';

export default class ContactForm extends React.Component {
  static propTypes = {
    handleSuccess: PropTypes.func.isRequired,
  };

  state = {
    error: false,
    name: '',
    email: '',
    message: '',
    loading: false,
  };

  // PRIVATE

  _handleSubmit = e => {
    e.preventDefault();

    const { loading, ...state } = this.state;

    if (!this._isValid()) {
      return;
    }

    this.setState({ error: false, loading: true }, () => {
      axios
        .post(process.env.CONTACT_URI, state)
        .then(({ data }) => {
          this.setState({ loading: false });
          if (data.success) {
            return this.setState({ email: '', name: '', message: '' }, () => {
              this.props.handleSuccess();
            });
          }
          // error
          this.setState({ error: true });
        })
        .catch(err => {
          this.setState({ error: true, loading: false });
          console.log('error submitting form', err);
        });
    });
  };

  _isValid = () => {
    const { email, name, message } = this.state;
    if (email.length && name.length && message.length) {
      return true;
    }
    return false;
  };

  _renderError = () => (
    <p className="sans-serif red pt2">
      Unable to submit form at this time. Please email us at &nbsp;
      <Email />
    </p>
  );

  render() {
    const { error, loading } = this.state;
    return (
      <form className="w-60" onSubmit={this._handleSubmit}>
        <Input
          label="Your name"
          onChange={e => this.setState({ name: e.target.value })}
          required
          value={this.state.name}
        />
        <Input
          label="Your email address"
          onChange={e => this.setState({ email: e.target.value })}
          type="email"
          required
          value={this.state.email}
        />
        <Input
          textarea
          label="Message"
          onChange={e => this.setState({ message: e.target.value })}
          required
          value={this.state.message}
        />

        <div className="flex flex-column items-end">
          <Recaptcha
            render="explicit"
            verifyCallback={v => console.log('verify callback', v)}
            onloadCallback={l => console.log('laod callaback', l)}
            sitekey="6LcsRkQUAAAAAIwxOIsH5pdvAwZxFGYZ1bYORec_"
          />

          {error ? this._renderError() : null}

          <Button extraStyles="mv4" loading={loading} type="submit">
            send message
          </Button>
        </div>
      </form>
    );
  }
}
