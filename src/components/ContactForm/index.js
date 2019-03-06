import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Button, Container, Headline, Input, Link} from 'components';
import FormSuccess from './FormSuccess';
import useFormReducer from './useFormReducer';

const SubTitle = styled.p`
  line-height: 33px;
`;

const Wrapper = styled.div`
  max-width: 677px;
  margin 0 auto;
`;

function ContactForm() {
  const [formState, dispatch] = useFormReducer();
  const {name, email, loading, message, success} = formState;

  function updateField(e, field) {
    dispatch({type: 'UPDATE_FIELD', field, value: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    const URI = process.env.GATSBY_CONTACT_URI;
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    dispatch({type: 'SET_LOADING', loading: true});
    axios
      .post(URI, {name, email, message}, config)
      .then(({data}) => {
        dispatch({type: 'FORM_SUCCESS'});
      })
      .catch(err => {
        dispatch({type: 'FORM_ERROR'});
        window.Rollbar.error('Form Submission Failure', e, {
          name,
          email,
          message,
        });
      });
  }

  return (
    <section
      className="ContactForm  bg-near-white relative overflow-y-hidden"
      id="work-with-us"
    >
      <Container className="pv6">
        <Wrapper>
          <Headline className="tc mt0 mb3" as="h2">
            Work with us
          </Headline>
          <SubTitle className="f5 tc">
            We’d love to grab coffee with you or jump on a call to chat about
            your project.
            <br /> Email us at{' '}
            <Link to="" target="_blank" rel="noopener noreferrer">
              hello@wildsmithstudio.com
            </Link>{' '}
            or send us a message.
          </SubTitle>
          <form className="flex flex-column" onSubmit={handleSubmit}>
            <Input
              label="Your name"
              onChange={e => updateField(e, 'name')}
              required
              type="text"
              value={name}
            />
            <Input
              label="Your email"
              onChange={e => updateField(e, 'email')}
              required
              type="email"
              value={email}
            />
            <Input
              label="Message"
              onChange={e => updateField(e, 'message')}
              required
              textarea
              value={message}
            />
            <div>
              <Button className="mt4 fr" loading={loading} type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Wrapper>
      </Container>
      <FormSuccess show={success} />
    </section>
  );
}

ContactForm.propTypes = {};

ContactForm.defaultProps = {};

export default ContactForm;
