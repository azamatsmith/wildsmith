import React from 'react';
import {storiesOf} from '@storybook/react';
import Tag from '../';

storiesOf('Tag', module)
  // .addDecorator(story => <Container>{story()}</Container>)
  .add('without props', () => <Tag>text</Tag>);
