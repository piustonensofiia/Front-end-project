import styled from 'styled-components';

import { breakpoints } from '../../../constants/breakpoints';
import joinGif from '../../../static/join.gif';

const JoinUs = () => {
  return (
    <Container>
      <Title>Join Us!</Title>
      <picture>
        <source
          media={`(min-width: ${breakpoints.tablet})`}
          srcSet={joinGif}
          width={600}
          height={300}
        />
        <Image src={joinGif} alt={'Join gif'} width={300} height={150} />
      </picture>
    </Container>
  );
};

const Container = styled('section')`
  padding-bottom: 32px;
`;

const Image = styled.img`
  display: block;
  margin: auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export default JoinUs;
