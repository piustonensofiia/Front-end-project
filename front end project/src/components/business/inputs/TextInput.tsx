import { Container, Error, Label, TextField } from './styles';
import { InputProps } from './types';

const TextInput = ({ name, label, id, placeholder = '' }: InputProps) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <TextField name={name} id={id} placeholder={placeholder} />
      <Error name={name} component={'p'} />
    </Container>
  );
};

export default TextInput;
