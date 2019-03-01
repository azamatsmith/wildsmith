const paths = {
  blog: '/blog/',

  // social
  instagram: 'https://www.instagram.com/wildsmith.studio/',
  linkedIn: 'https://www.linkedin.com/company/wildsmith-studio-llc',
  twitterMatt: 'https://twitter.com/azamatsmith/',
  twitterRachel: 'https://twitter.com/azamatsmith/',
};

function routes(route) {
  const thisRoute = paths[route];
  if (thisRoute) {
    return thisRoute;
  }
  console.error('invalid route: ', route);
  return '/';
}

export default routes;
