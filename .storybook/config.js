import React from 'react';
import {addDecorator, configure} from '@storybook/react';
import '../src/styles/main.scss';

const req = require.context('../src/components', true, /\.stories\.js$/);

addDecorator(story => (
  <div className="sans-serif mv5 flex justify-center">{story()}</div>
));

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
