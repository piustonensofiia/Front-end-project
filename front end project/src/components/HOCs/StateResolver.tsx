import styled from 'styled-components';

import { colors } from '../../constants/styles';

type Props = {
  error: string;
  isLoading: boolean;
  children: JSX.Element;
};
const StateResolver = ({ error, isLoading, children }: Props) => {
  if (isLoading) return <LoadingText>Loading...</LoadingText>;

  if (error) return <Error>{error}</Error>;

  return <>{children}</>;
};

const LoadingText = styled('p')`
  margin-top: 12px;
  color: ${colors.primaryBackground};
`;

const Error = styled('p')`
  color: #ff8080;
`;

export default StateResolver;
