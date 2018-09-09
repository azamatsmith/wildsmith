import React from 'react';
import {Layout} from 'components';
import {Home} from 'routes';
import {StaticQuery, graphql} from 'gatsby';

export default props => {
  console.log(props);
  return (
    <StaticQuery
      query={graphql`
        query InstaFeedQuery {
          ...InstagramImages
        }
      `}
      render={data => (
        <React.Fragment>
          <Layout location={props.location}>
            <Home data={data} />
          </Layout>
        </React.Fragment>
      )}
    />
  );
};
