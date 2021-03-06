import React from 'react';
import PropTypes from 'prop-types';
import {P, TitleText, UnderlineHighlight} from 'components';
import Profile from './components/Profile';

export default class WhoWeAre extends React.Component {
  static propTypes = {
    mattProfile: PropTypes.shape({
      resolutions: PropTypes.object,
    }),
    rachelProfile: PropTypes.shape({
      resolutions: PropTypes.object,
    }),
  };

  static defaultProps = {};

  render() {
    const {mattProfile, rachelProfile} = this.props;
    const pStyle = 'measure-wide lh-copy';
    return (
      <div className="WhoWeAre">
        <div className="flex flex-column items-center mh3">
          <TitleText>
            <UnderlineHighlight left={1}>who </UnderlineHighlight>
            we are
          </TitleText>
          <div className="tc">
            <P extraStyles={`${pStyle} mt0`}>
              We are a Colorado-based designer and developer team.
            </P>
            <P extraStyles={pStyle}>
              Rachel Cope has over 8 years of experience in UI, UX, product
              design, and strategy. She co-founded a web app and has worked as a
              design consultant with dozens of clients across the US, Europe,
              and Mexico.
            </P>
            <P extraStyles={pStyle}>
              Matt Smith is a full-stack developer. He has developed software
              for the US Air Force, Department of Veterans Affairs, numerous
              startups, as well as launched several of his own apps and
              projects.
            </P>
          </div>
        </div>

        <div className="flex flex-column flex-row-ns items-center justify-center mv4">
          <Profile
            image={rachelProfile}
            instagram="https://www.instagram.com/rachelcope/"
            linkedin="https://www.linkedin.com/in/rachel-cope-8aab126"
            twitter="https://www.twitter.com/rachelcope"
            extraStyles="mh4 mv3 mv0-ns"
            name="rachel"
          />
          <Profile
            image={mattProfile}
            instagram="https://www.instagram.com/azamatsmith"
            linkedin="https://www.linkedin.com/in/azamatsmith"
            twitter="https://www.twitter.com/azamatsmith"
            extraStyles="mh4 mv3 mv0-ns"
            name="matt"
          />
        </div>
      </div>
    );
  }
}
