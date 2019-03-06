import React from 'react';
import {Container} from 'components';
import styled from 'styled-components';
// import {useVisible} from 'hooks';

const Title = styled.h2`
  letter-spacing: 0;
  text-align: center;
  max-width: 1017px;
  font-weight: 500;
  // ns
  @media screen and (min-width: 30em) {
    font-size: 36px;
    line-height: 50px;
  }
  // large
  @media screen and (min-width: 960px) {
    font-size: 54px;
    line-height: 79px;
  }
`;

function WhatWeDo() {
  // const el = React.useRef(null);
  // const {scrolledIntoView} = useVisible(el);
  return (
    <section className="WhatWeDo bg-black white pv6">
      <Container>
        <Title>
          We design and build digital products and services that solve problems
          through <span className="yellow">human-centered design</span> and{' '}
          <span className="yellow">test-driven, agile development</span>.
        </Title>
      </Container>
    </section>
  );
}

WhatWeDo.propTypes = {};

WhatWeDo.defaultProps = {};

export default WhatWeDo;
