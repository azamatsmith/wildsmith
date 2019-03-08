const ghpages = require('gh-pages');

ghpages.publish('storybook-dist', err => {
  if (err) {
    return console.error('\n\nerror publishing storybook', err);
  }
  console.log('storybook published successfully');
});
