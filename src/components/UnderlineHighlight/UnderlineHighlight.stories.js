import React from 'react';
import {storiesOf} from '@storybook/react';
import {checkA11y} from '@storybook/addon-a11y';
import UnderlineHighlight from '../UnderlineHighlight';
import TitleText from '../TitleText';

storiesOf('UnderlineHighlight', module)
  // .addDecorator(story => <Container>{story()}</Container>)
  .addDecorator(checkA11y)
  .addWithJSX('default', () => (
    <TitleText>
      we are <UnderlineHighlight>wild</UnderlineHighlight>
      smith
    </TitleText>
  ));
