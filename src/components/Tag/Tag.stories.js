import React from 'react';
import {storiesOf} from '@storybook/react';
import Tag from '../Tag';

storiesOf('Tag', module)
  // .addDecorator(story => <Container>{story()}</Container>)
  .add('default', () => <Tag>graphql</Tag>)
  .add('with link', () => <Tag link>graphql</Tag>);
