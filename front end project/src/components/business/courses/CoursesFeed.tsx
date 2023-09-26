import styled from 'styled-components';

import { Course } from '../../../api/courses/CourseManager';
import { breakpoints } from '../../../constants/breakpoints';
import { colors } from '../../../constants/styles';

type Props = {
  courses: Course[];
};

const createSearchUrl = (name: string) => {
  const params = new URLSearchParams();
  params.set('q', name);
  const url = new URL('search', 'https://google.com');
  url.search = `?${params.toString()}`;

  return url.toString();
};

const CoursesFeed = ({ courses }: Props) => {
  if (courses.length === 0) {
    return (
      <Feed>
        <NotFound>No courses found...</NotFound>
      </Feed>
    );
  }

  return (
    <Feed>
      {courses.map((course) => (
        <Card key={course.id} href={createSearchUrl(course.name)} target={'_blank'}>
          <img src={course.img} alt={course.name} width={64} height={64} />
          <Name>{course.name}</Name>
          <Subtitle>{course.difficulty}</Subtitle>
        </Card>
      ))}
    </Feed>
  );
};

const Feed = styled('section')`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
  padding-bottom: 32px;
`;

const NotFound = styled('p')`
  opacity: 0.5;
`;

const Card = styled('a')`
  user-select: none;
  text-decoration: none;
  background-color: ${colors.primaryBackground};
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  color: rgb(30, 38, 53);
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  -moz-osx-font-smoothing: grayscale;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  &:focus-visible,
  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Name = styled('h3')`
  display: block;
  font-size: 1.5em;
  font-weight: bold;
`;

const Subtitle = styled('p')`
  display: block;
`;

export default CoursesFeed;
