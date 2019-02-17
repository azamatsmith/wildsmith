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

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

configure(loadStories, module);
