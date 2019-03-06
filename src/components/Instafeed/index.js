import React from 'react';
import styled from 'styled-components';
import {Button, Container} from 'components';
import InstafeedImage from './InstafeedImage';
import useInstafeed from './useInstafeed';
import routes from 'utils/routes';

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
    <section className="flex pv6">
      <Container className="w-100">
        <ImageGrid>{images}</ImageGrid>
        <div className="flex justify-center mt6 pt4">
          <Button className="dib" to={routes('instagram')}>
            Follow us
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Instafeed;
