import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';
import { Button, Input, P, TitleText, UnderlineText } from 'components';


export default class Contact extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  state = {

  }


  // PRIVATE

  _handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }

  render() {
    return (
      <div className="Contact">
        <div className="flex flex-column items-center">
          <UnderlineText
            extraStyles="mb0"
            highlightStyle={{ left: '-15px', width: '240px' }}
            text="contact us"
          />
          <P extraStyles="mt0 tc">
            We’d love to grab you a coffee or jump on a call to chat about your project.
          </P>
          <P extraStyles="mt0 tc">
            Email us at hello@wildsmithstudio.com or send us a message.
          </P>
        </div>
        <div className="flex justify-center">
          <form className="w-60" onSubmit={this._handleSubmit}>
            <Input label="Your name" />
            <Input label="Your email address" />
            <Input textarea label="Message" />
            <div className="flex flex-column items-end">
              <Recaptcha
                render="explicit"
                verifyCallback={(v) => console.log('verify callback', v)}
                onloadCallback={(l) => console.log('laod callaback', l)}
                sitekey="6LcsRkQUAAAAAIwxOIsH5pdvAwZxFGYZ1bYORec_"
              />
              <Button extraStyles="mv4" type="submit">send message</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
