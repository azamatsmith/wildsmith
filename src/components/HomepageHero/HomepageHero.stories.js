import React from 'react';
import {storiesOf} from '@storybook/react';
import {checkA11y} from '@storybook/addon-a11y';
import HomepageHero from './';

storiesOf('HomepageHero', module)
  // .addDecorator(story => <ComponentName>{story()}</ComponentName>)
  .addDecorator(checkA11y)
  .addWithJSX('default', () => <HomepageHero />);
