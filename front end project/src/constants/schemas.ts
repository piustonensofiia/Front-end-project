import { object, string } from 'yup';

export const loginSchema = object({
  name: string().required('Required'),
  password: string().required('Required'),
});
