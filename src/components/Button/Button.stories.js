import React from 'react';
import {storiesOf} from '@storybook/react';
import {checkA11y} from '@storybook/addon-a11y';
import Button from './';

storiesOf('Button', module)
  // .addDecorator(story => <ComponentName>{story()}</ComponentName>)
  .addDecorator(checkA11y)
  .addWithJSX('default', () => <Button>Work with us</Button>);
