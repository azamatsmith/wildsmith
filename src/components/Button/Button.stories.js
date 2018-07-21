import React from 'react';
import {storiesOf} from '@storybook/react';
import {checkA11y} from '@storybook/addon-a11y';
import Button from '../Button';

storiesOf('Button', module)
  // .addDecorator(story => <Container>{story()}</Container>)
  .addDecorator(checkA11y)
  .addWithJSX('default', () => <Button>Click Me</Button>)
  .addWithJSX('with loading={true}', () => (
    <Button loading={true}>Click Me</Button>
  ));
