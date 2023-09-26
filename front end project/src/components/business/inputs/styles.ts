import { ErrorMessage as BaseErrorMessage, Field } from 'formik';
import styled from 'styled-components';

import { colors } from '../../../constants/styles';

export const TextField = styled(Field)`
  background-color: #1e2635;
  font-size: 1.3rem;
  border-radius: 50px;
  padding: 0.375rem 0.75rem;
  color: ${colors.primaryText};
  background-clip: padding-box;
  border: 1px solid ${colors.primaryBackground};
  transition: border-color 0.15s ease-in-out, box-shadow 2s ease-in-out;
  &:focus-visible {
    outline: none;
    border-color: ${colors.primaryText};
  }
`;

export const Error = styled(BaseErrorMessage)`
  color: ${colors.error};
  line-height: 18px;
  font-size: 13px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: auto;
  width: 100%;
  max-width: 343px;
  position: relative;
`;

export const Label = styled.label``;
