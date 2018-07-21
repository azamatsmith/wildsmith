import React from 'react';
import {addDecorator, configure, setAddon} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';
import JSXAddon from 'storybook-addon-jsx';
import '../src/styles/main.scss';

setOptions({
  name: 'Wildsmith',
  sortStoriesByKind: true,
  url: 'https://github.com/wildsmithstudio/wildsmith',
});

setAddon(JSXAddon);
addDecorator(story => (
  <div className="sans-serif mv5 flex justify-center">{story()}</div>
));

const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
