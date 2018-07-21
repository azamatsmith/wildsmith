import React from 'react';
import {storiesOf} from '@storybook/react';
import {checkA11y} from '@storybook/addon-a11y';
import Tag from '../Tag';

storiesOf('Tag', module)
  // .addDecorator(story => <Container>{story()}</Container>)
  .addDecorator(checkA11y)
  .addWithJSX('default', () => <Tag>graphql</Tag>)
  .addWithJSX('with link', () => <Tag link>graphql</Tag>);
