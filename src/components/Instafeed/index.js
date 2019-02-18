import React from 'react';
import styled from 'styled-components';
import {Container} from 'components';
import InstafeedImage from './InstafeedImage';
import useInstafeed from './useInstafeed';

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  // align-items: center;
  // justify-content: center;
`;

function Instafeed() {
  const data = useInstafeed().allFile.edges.map(({node}) => ({...node}));
  const images = data
    .filter(image => image.childImageSharp)
    .map(image => <InstafeedImage key={image.fields.link} image={image} />);
  return (
    <div className="flex">
      <Container className="w-100">
        <ImageGrid>{images}</ImageGrid>
      </Container>
    </div>
  );
}

export default Instafeed;
