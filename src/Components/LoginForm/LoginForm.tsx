import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Input from '../From/Input';
import Button from '../From/Button';
import useForm from '../../Hooks/useForm';

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('httpS://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
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
