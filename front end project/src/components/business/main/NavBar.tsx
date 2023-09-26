import { Link } from 'react-router-dom';
import styled from 'styled-components';

import authManager from '../../../api/auth/AuthManager';
import { breakpoints } from '../../../constants/breakpoints';

const NavBarElement = () => {
  const isUserLogged = localStorage.getItem('userId') !== null;
  console.log(isUserLogged);

  const handleLogout = () => {
    authManager.logoutUser();
    window.location.reload();
  };

  return (
    <NavBar>
      <NavButton to={'courses'}>Courses</NavButton>
      {!isUserLogged && (
        <>
          <NavButton to={'login?type=login'}>Login</NavButton>
          <NavButton to={'login?type=signUp'}>Sign Up</NavButton>
        </>
      )}
      {isUserLogged && (
        <NavButton as={'button'} onClick={handleLogout}>
          Logout
        </NavButton>
      )}
    </NavBar>
  );
};

export default NavBarElement;

const NavBar = styled('nav')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const NavButton = styled(Link)`
  all: unset;
  min-width: 150px;
  background-color: orange;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  transition: transform 0.3s;

  &:hover,
  &:active {
    background-color: darkorange;
  }

  &:focus-visible,
  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.9);
  }
`;
