import React from 'react';
import {Button, Container, Input} from 'components';
import styled from 'styled-components';
import axios from 'axios';
import useFormReducer from './useFormReducer';

const Form = styled.form``;

function ContactForm() {
  const [formState, dispatch] = useFormReducer();
  const {name, email, message, loading} = formState;

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
    <section className="ContactForm">
      <Container>
        <Form onSubmit={handleSubmit}>
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
          <Button className="mt4 fr" loading={loading} type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
}

ContactForm.propTypes = {};

ContactForm.defaultProps = {};

export default ContactForm;
