import { Form as BaseForm, Formik } from 'formik';
import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import authManager from '../../api/auth/AuthManager';
import PasswordInput from '../../components/business/inputs/PasswordInput';
import { Error as BaseError } from '../../components/business/inputs/styles';
import TextInput from '../../components/business/inputs/TextInput';
import { loginSchema } from '../../constants/schemas';
import { colors } from '../../constants/styles';

const initialValues = { name: '', password: '' };

const LoginPage = () => {
  const [query, setSearchParams] = useSearchParams();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const currentType = query.get('type') ?? 'login';

  const redirectTo = (path: string) => {
    return () =>
      setSearchParams((prev) => {
        prev.set('type', path);
        return prev;
      });
  };

  const handleSubmit = async (values: { name: string; password: string }) => {
    setError('');
    try {
      if (isLogin) {
        await authManager.loginUser(values);
      } else {
        await authManager.registerUser(values);
      }
      navigate(`/${query.get('nextUrl') ?? ''}`);
    } catch (e: any) {
      setError(e.message ?? e.data ?? e.data.message);
    }
  };

  const isLogin = currentType === 'login';

  return (
    <Container>
      <LinkBack to="..">⬅</LinkBack>
      <LinksContainer>
        <LinkText active={isLogin} onClick={redirectTo('login')}>
          Login
        </LinkText>
        <LinkText active={!isLogin} onClick={redirectTo('signUp')}>
          Sign Up
        </LinkText>
      </LinksContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        {({ isValid, dirty }) => (
          <Form>
            <TextInput
              id={'name'}
              name={'name'}
              label={'Name'}
              placeholder={'sofiia.piustonen@gmail.com'}
            />
            <PasswordInput
              id={'password'}
              label={'Password'}
              name={'password'}
              placeholder={'ILOVEKPI2023'}
            />
            <Button type={'submit'} disabled={!isValid || !dirty}>
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
          </Form>
        )}
      </Formik>
      {error && <Error as={'p'}>{error}</Error>}
    </Container>
  );
};

const Container = styled('main')`
  position: relative;
  max-width: 375px;
  margin: 64px auto;
  background-color: ${colors.secondaryBackground};
  padding: 16px;
  border-radius: 30px;
`;

const Button = styled.button`
  line-height: 45px;
  border-radius: 45px;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: ${colors.primaryText};
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  border: none;
  margin: 0 40px;
  cursor: pointer;

  &:hover {
    background: ${colors.primaryBackground};
    box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
    color: ${colors.primaryText};
    transform: translateY(-5px);
  }
  &:disabled,
  &:disabled:hover {
    background-color: ${colors.secondaryText};
    box-shadow: none;
    color: dimgray;
    transform: none;
  }
`;

const LinksContainer = styled('div')`
  display: flex;
  justify-content: space-evenly;
`;

const Form = styled(BaseForm)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LinkText = styled('button')<{ active: boolean }>`
  all: unset;
  cursor: pointer;
  text-align: center;
  font-size: 24px;
  line-height: 38px;
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
  text-decoration-color: ${colors.primaryBackground};
  text-decoration-thickness: from-font;
`;

const LinkBack = styled(Link)`
  position: absolute;
  top: 10px;
  left: 15px;
  text-decoration: none;
  font-size: 40px;
  color: ${colors.primaryText};
`;

const Error = styled(BaseError)`
  text-align: center;
  margin-top: 16px;
  font-size: 22px;
  line-height: 30px;
`;

export default LoginPage;
