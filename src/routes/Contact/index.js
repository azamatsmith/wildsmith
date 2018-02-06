import React, { Component } from 'react';
import { Email, P, TitleText, UnderlineText } from 'components';
import ContactForm from './components/ContactForm';
import SubmittedForm from './components/SubmittedForm';

export default class Contact extends Component {
  state = {
    submitted: false,
  };

  // PRIVATE

  _renderForm = () => {
    return this.state.submitted ? (
      <SubmittedForm />
    ) : (
      <ContactForm handleSuccess={() => this.setState({ submitted: true })} />
    );
  };

  render() {
    const { submitted } = this.state;
    return (
      <div className="Contact">
        <div className="flex flex-column items-center">
          <UnderlineText
            extraStyles="mb0"
            highlightStyle={{ left: '-15px', width: '240px' }}
            text="contact us"
          />
          <div className={submitted ? 'dn' : ''}>
            <P extraStyles="mt0 tc">
              We’d love to grab coffee with you or jump on a call to chat about
              your project.
            </P>
            <P extraStyles="mt0 tc">
              Email us at <Email /> or send us a message.
            </P>
          </div>
        </div>
        <div className="flex justify-center">{this._renderForm()}</div>
      </div>
    );
  }
}
