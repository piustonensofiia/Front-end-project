import { useState } from 'react';
import styled from 'styled-components';

import { Container, Error, Label, TextField } from './styles';
import { InputProps } from './types';

const PasswordInput = ({ name, id, label, placeholder = '' }: InputProps) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordIsVisible((prevState) => !prevState);
  };

  const inputType = passwordIsVisible ? 'text' : 'password';

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <TextField name={name} id={id} type={inputType} placeholder={placeholder} />
      <Error name={name} component={'p'} />
      <CheckboxLabel htmlFor={'checkbox'}>
        <VisibilityCheckbox type={'checkbox'} onChange={togglePasswordVisibility} />
        Show password
      </CheckboxLabel>
    </Container>
  );
};

const CheckboxLabel = styled(Label)`
  display: flex;
  margin-top: 4px;
`;

const VisibilityCheckbox = styled.input`
  margin-right: 5px;
  zoom: 1.2;
`;

export default PasswordInput;
