import styled from 'styled-components';

import About from '../../components/business/main/About';
import JoinUs from '../../components/business/main/JoinUs';
import NavBar from '../../components/business/main/NavBar';
import StudentsReviews from '../../components/business/main/StudentsReviews';
import Teachers from '../../components/business/main/Teachers';

const Main = () => {
  return (
    <Container>
      <NavBar />
      <About />
      <StudentsReviews />
      <Teachers />
      <JoinUs />
    </Container>
  );
};

const Container = styled('main')`
  height: 100%;
  padding: 0 32px;
`;
export default Main;
