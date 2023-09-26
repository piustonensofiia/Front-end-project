import styled from 'styled-components';

import { colors } from '../../../constants/styles';

const About = () => {
  return (
    <List>
      <Title>About Us</Title>
      <ListItem>My creator is a student of the KM-03 group, Piustonen Sofiia</ListItem>
      <ListItem>Together we will study the basic courses in different areas</ListItem>
      <ListItem>I will help you to choose material for you</ListItem>
    </List>
  );
};

const List = styled.ul`
  width: fit-content;
  margin: 32px auto;
  list-style-type: '✔ ';
  color: ${colors.secondaryText};
`;

const ListItem = styled.li`
  &::marker {
    color: ${colors.primaryBackground};
  }
`;

const Title = styled('h2')`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export default About;
