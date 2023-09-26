import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../constants/styles';
import Footer from '../business/footer/Footer';
import Header from '../business/header/Header';

const RootLayout = () => {
  return (
    <Page>
      <Header />
      <OverflowContainer>
        <Outlet />
      </OverflowContainer>
      <Footer />
    </Page>
  );
};

export default RootLayout;

const Page = styled('div')`
  background-color: ${colors.background};
  width: 100%;
  height: 100vh;

  color: ${colors.primaryText};
  font-size: 18px;
  line-height: 24px;
  font-family: 'Montserrat', sans-serif;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

const OverflowContainer = styled('div')`
  overflow: auto;
  margin: 0 10px;
  height: 100%;

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.primaryBackground};
    border-radius: 12px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }
`;
