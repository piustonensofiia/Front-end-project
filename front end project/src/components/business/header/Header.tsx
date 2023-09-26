import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { breakpoints } from '../../../constants/breakpoints';
import { colors } from '../../../constants/styles';

const Header = () => {
  return (
    <HeaderStyled>
      <Link to={'/'}>
        <picture>
          <Image
            as={'source'}
            media={`(min-width: ${breakpoints.tablet})`}
            srcSet={
              'https://codefinity-content-media.s3.eu-west-1.amazonaws.com/c5b4ea8f-8a30-439f-9625-ddf2effbd9ac/test.svg'
            }
            width={350}
            height={100}
          />
          <Image
            as={'source'}
            media={`(min-width: ${breakpoints.mobile})`}
            srcSet={
              'https://codefinity-content-media.s3.eu-west-1.amazonaws.com/c5b4ea8f-8a30-439f-9625-ddf2effbd9ac/test.svg'
            }
            width={250}
            height={75}
          />
          <Image
            src={
              'https://codefinity-content-media.s3.eu-west-1.amazonaws.com/c5b4ea8f-8a30-439f-9625-ddf2effbd9ac/test.svg'
            }
            alt={'logo'}
            width={175}
            height={50}
          />
        </picture>
      </Link>
      <Subtitle>with love for ukrainians</Subtitle>
    </HeaderStyled>
  );
};

const HeaderStyled = styled('header')`
  background-color: ${colors.background};
`;

const Subtitle = styled.h2`
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  position: relative;
  bottom: 15px;
`;

const Image = styled('img')`
  display: block;
  margin: auto;
`;

export default Header;
