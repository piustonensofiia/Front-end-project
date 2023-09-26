import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import WithAuthorization from './components/HOCs/WithAuthorization';
import RootLayout from './components/layouts/RootLayout';
import CoursesPage from './pages/CoursesPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/login/LoginPage';
import Main from './pages/main/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: 'login', element: <LoginPage /> },
      {
        path: 'courses',
        element: (
          <WithAuthorization nextRoute={'courses'}>
            <CoursesPage />
          </WithAuthorization>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
