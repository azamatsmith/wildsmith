import React from 'react';
import {storiesOf} from '@storybook/react';
import {checkA11y} from '@storybook/addon-a11y';
import Alert from '../Alert';

storiesOf('Alert', module)
  // .addDecorator(story => <Container>{story()}</Container>)
  .addDecorator(checkA11y)
  .addWithJSX('with alertType="warning"', () => (
    <Alert alertType="warning">this is a warning</Alert>
  ))
  .addWithJSX('with alertType="info"', () => (
    <Alert alertType="info">this is a warning</Alert>
  ))
  .addWithJSX('with alertType="success"', () => (
    <Alert alertType="success">this is a warning</Alert>
  ));
