import React, {Component} from 'react';
import {Email, P, TitleText, UnderlineHighlight} from 'components';
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
      <ContactForm handleSuccess={() => this.setState({submitted: true})} />
    );
  };

  render() {
    const {submitted} = this.state;
    return (
      <div className="Contact">
        <div className="flex flex-column items-center">
          <TitleText>
            <UnderlineHighlight left={-7}>contact </UnderlineHighlight>
            us
          </TitleText>
          <div className={submitted ? 'dn' : ''}>
            <P extraStyles="mt0 tc mh3">
              We’d love to grab coffee with you or jump on a call to chat about
              your project.
            </P>
            <P extraStyles="mt4 mt0-ns tc mh4">
              Email us at <Email /> or send us a message.
            </P>
          </div>
        </div>
        <div className="flex justify-center">{this._renderForm()}</div>
      </div>
    );
  }
}
