import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import courseManager, { Course } from '../api/courses/CourseManager';
import CoursesFeed from '../components/business/courses/CoursesFeed';
import StateResolver from '../components/HOCs/StateResolver';

const CoursesPage = () => {
  const [searchString, setSearchString] = useState<string>('');
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchString.toLowerCase()),
  );

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchString(evt.target.value);
  };

  useEffect(() => {
    courseManager
      .getCourses()
      .then(setCourses)
      .catch((e: { message: string }) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container>
      <Header>Search your course!</Header>
      <Input placeholder={'Input the course title'} onChange={handleInputChange} />
      <StateResolver error={error} isLoading={loading}>
        <CoursesFeed courses={filteredCourses} />
      </StateResolver>
    </Container>
  );
};

const Container = styled('main')`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled('h1')`
  user-select: none;
  text-align: center;
  transition: transform 0.3s;

  &:focus-visible,
  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Input = styled('input')`
  margin-top: 12px;
  padding: 8px 16px;
  border-radius: 4px;

  -moz-osx-font-smoothing: grayscale;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.25s ease-out;

  &:focus,
  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export default CoursesPage;
