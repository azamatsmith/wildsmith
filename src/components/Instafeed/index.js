import React from 'react';
import styled from 'styled-components';
import {Container} from 'components';
import InstafeedImage from './InstafeedImage';
import useInstafeed from './useInstafeed';

const ImageGrid = styled.div`
  display: grid;
  grid-gap: 30px;
  align-items: center;
  // medium
  @media screen and (min-width: 30em) and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
  // large
  @media screen and (min-width: 960px) {
    grid-gap: 50px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

function Instafeed() {
  const data = useInstafeed().allFile.edges.map(({node}) => ({...node}));
  const images = data
    .filter(image => image.childImageSharp)
    .map(image => <InstafeedImage key={image.fields.link} image={image} />);
  return (
    <div className="flex pv6">
      <Container className="w-100">
        <ImageGrid>{images}</ImageGrid>
      </Container>
    </div>
  );
}

export default Instafeed;
