import React from 'react';
import {storiesOf} from '@storybook/react';
import {checkA11y} from '@storybook/addon-a11y';
import Link from './';

storiesOf('Link', module)
  // .addDecorator(story => <ComponentName>{story()}</ComponentName>)
  .addDecorator(checkA11y)
  .addWithJSX('default', () => <Link to="/">View Portfolio</Link>)
  .addWithJSX('external', () => (
    <Link to="https://www.linkedin.com/company/wildsmith-studio-llc">
      View Portfolio
    </Link>
  ));
