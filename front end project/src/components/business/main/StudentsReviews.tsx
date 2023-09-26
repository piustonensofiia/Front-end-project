import styled from 'styled-components';

import { breakpoints } from '../../../constants/breakpoints';

const StudentsReviews = () => {
  return (
    <Container>
      <Title>What our students say</Title>
      <ReviewsContainer>
        <Fade />
        <OverflowContainer>
          <Reviews>{reviewsArray}</Reviews>
          <Reviews>{reviewsArray}</Reviews>
          <Reviews>{reviewsArray}</Reviews>
        </OverflowContainer>
      </ReviewsContainer>
    </Container>
  );
};

const REVIEWS = [
  {
    src: 'https://codefinity-content-media.s3.eu-west-1.amazonaws.com/c5b4ea8f-8a30-439f-9625-ddf2effbd9ac/son/feed1.png',
  },
  {
    src: 'https://codefinity-content-media.s3.eu-west-1.amazonaws.com/c5b4ea8f-8a30-439f-9625-ddf2effbd9ac/son/feed2.png',
  },
  {
    src: 'https://codefinity-content-media.s3.eu-west-1.amazonaws.com/c5b4ea8f-8a30-439f-9625-ddf2effbd9ac/son/feed3.png',
  },
];

const reviewsArray = REVIEWS.map((review, index) => (
  <picture key={index}>
    <source
      media={`(min-width: ${breakpoints.tablet})`}
      srcSet={review.src}
      width={300}
      height={200}
    />
    <img src={review.src} alt={''} width={150} height={100} />
  </picture>
));

const Container = styled('section')`
  @media screen and (min-width: ${breakpoints.tablet}) {
    margin: 0 32px;
  }
`;

const OverflowContainer = styled.div`
  overflow: hidden;
  display: flex;
`;

const Reviews = styled('div')`
  display: flex;
  animation: marquee 20s infinite linear;

  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const ReviewsContainer = styled('div')`
  position: relative;
  &:hover {
    & > div > div {
      animation-play-state: paused;
    }
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Fade = styled('div')`
  pointer-events: none;
  background: linear-gradient(90deg, #1e2635, transparent 30%, transparent 70%, #1e2635);
  position: absolute;
  inset: 0;
`;

export default StudentsReviews;
