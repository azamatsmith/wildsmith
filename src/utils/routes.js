const paths = {
  blog: '/blog/',
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
