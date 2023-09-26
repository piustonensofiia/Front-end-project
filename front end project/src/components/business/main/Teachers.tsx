import styled from 'styled-components';

import { colors } from '../../../constants/styles';

const Teachers = () => {
  return (
    <Container>
      <Title>Our teachers (my friends)</Title>
      <Table>
        <thead>
          <tr>
            <TableHeadItem>Firstname</TableHeadItem>
            <TableHeadItem>Lastname</TableHeadItem>
            <TableHeadItem>Group</TableHeadItem>
            <TableHeadItem>Courses created</TableHeadItem>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableItem>Dmytro</TableItem>
            <TableItem>Firman</TableItem>
            <TableItem>KM-02</TableItem>
            <TableItem>Python Basics</TableItem>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Container = styled.section`
  margin-bottom: 24px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableItem = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  color: ${colors.secondaryText};
  font-size: 3.2vw;
`;

const TableHeadItem = styled(TableItem)`
  font-size: 3.7vw;
  font-weight: 600;
`;
export default Teachers;
