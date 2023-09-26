import styled from 'styled-components';

import { breakpoints } from '../../../constants/breakpoints';
import { colors } from '../../../constants/styles';

const baseUrl = 'https://google.com/search?q=';

const Footer = () => {
  return (
    <Container>
      <a href={'mailto:sofiia.piustonen@gmail.com'}>sofiia.piustonen@gmail.com</a>
      <a href={`${baseUrl}${'Terms & Conditions'.replace(/ /g, '+')}`}>
        Terms & Conditions
      </a>
      <a href={`${baseUrl}${'Cookie Policy'.replace(/ /g, '+')}`}>Cookie Policy</a>
      <Copyright>Copyright 2023</Copyright>
    </Container>
  );
};

const Container = styled.footer`
  margin-top: auto;
  background-color: ${colors.primaryBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 8px;

  & > a,
  > p {
    font-weight: 500;
    color: ${colors.primaryText};
    text-decoration: none;
    font-size: 13px;
    line-height: 18px;
  }

  & > a {
    display: none;
    @media screen and (min-width: ${breakpoints.tablet}) {
      display: block;
    }
  }
`;

const Copyright = styled.p`
  color: black !important;
  font-weight: 600 !important;
`;
export default Footer;
