import styled from 'styled-components';

const Headline = styled.span`
  letter-spacing: 0;
  font-weight: 500;
  // medium
  @media screen and (min-width: 30em) and (max-width: 960px) {
    font-size: 48px;
  }
  // large
  @media screen and (min-width: 960px) {
    font-size: 64px;
  }
`;

export default Headline;
