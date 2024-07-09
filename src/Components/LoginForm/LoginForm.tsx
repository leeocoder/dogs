import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import useForm from '../../Hooks/useForm';
import Button from '../From/Button';
import Input from '../From/Input';

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      await userLogin(username.value, password.value);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form
        action=''
        onSubmit={handleSubmit}
      >
        <Input
          label='Usuário'
          type='text'
          name='username'
          {...username}
        />
        <Input
          label='Senha'
          type='password'
          name='password'
          {...password}
        />
        <Button>Entrar</Button>
        <Link to='/login/esqueci-senha'>Esqueci minha senha</Link>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  );
}

export default LoginForm;
