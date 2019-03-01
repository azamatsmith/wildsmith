import React from 'react';
// import PropTypes from 'prop-types';
import {Container, Link} from 'components';
import routes from 'utils/routes';
import styled from 'styled-components';

const StyledFooter = styled.footer``;

const Title = styled.h2``;

const StyledP = styled.p`
  color: ${({theme}) => theme.gray};
  font-size: 16px;
  line-height: 33px;
  padding-bottom: 20px;
`;

const ListItem = styled.li`
  line-height: 33px;
`;

function Footer() {
  return (
    <StyledFooter className="bg-black pv5">
      <Container>
        <Title className="f2 fw4 white mb2">About us</Title>
        <div className="flex flex-column flex-row-l">
          <div className="w-100 w-50-l">
            <StyledP className="mt0">
              Wildsmith is the studio of the design and development duo,{' '}
              <Link to={routes('twitterMatt')}>Matthew Smith</Link> and{' '}
              <Link to={routes('twitterRachel')}>Rachel Cope Smith</Link> and
              based in Denver, Colorado. We design and build digital products,
              services, and experiences that matter.
            </StyledP>
            <StyledP>
              Rachel has over 8 years of experience in UI, UX, product design,
              and strategy. She co-founded a web app and has worked as a design
              consultant with dozens of clients across the US, Europe, and
              Mexico.
            </StyledP>
            <StyledP>
              Matt is a full-stack developer. He has developed software for the
              US Air Force, Department of Veterans Affairs, numerous startups,
              as well as launched several of his own apps and projects.
            </StyledP>
          </div>
          <div className="w-100 w-50-l pl6-l">
            <ul className="pl0 list mt0">
              <ListItem className="mt0">
                <Link to={routes('blog')}>Blog</Link>
              </ListItem>
              <ListItem>
                <Link to={routes('instagram')}>Instagram</Link>
              </ListItem>
              <ListItem>
                <Link to="">LinkedIn</Link>
              </ListItem>
              <ListItem className="gray">
                Twitter (<Link to={routes('twitterMatt')}>Matt</Link> &{' '}
                <Link to={routes('twitterRachel')}>Rachel</Link>)
              </ListItem>
            </ul>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
