import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as { data?: string; statusText?: string };
  return <p>{error.statusText ?? error.data ?? 'Unknown error'}</p>;
};

export default ErrorPage;
