import React from 'react';
import {addDecorator, configure, setAddon} from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import '../src/styles/main.scss';

const req = require.context('../src/components', true, /\.stories\.js$/);

setAddon(JSXAddon);
addDecorator(story => (
  <div className="sans-serif mv5 flex justify-center">{story()}</div>
));

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
