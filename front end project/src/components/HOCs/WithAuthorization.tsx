import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  nextRoute: string;
  children: JSX.Element;
};

const WithAuthorization = ({ nextRoute, children }: Props) => {
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();
  useEffect(() => {
    if (!userId) {
      navigate(`/login?type=login&nextUrl=${nextRoute}`);
    }
  }, [userId]);

  return <>{children}</>;
};

export default WithAuthorization;
