import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import useForm from '../../Hooks/useForm';
import Button from '../Form/Button';
import Input from '../Form/Input';
import Error from '../../Helpers/Error';

import './login.css';
import '../Form/Button/button.css';

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      await userLogin(username.value, password.value);
    }
  };

  return (
    <section className='animateLeft'>
      <h1 className='title'>Login</h1>
      <form
        onSubmit={handleSubmit}
        className='form'
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
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link
        className='perdeu'
        to='/login/perdeu'
      >
        Perdeu a senha ?
      </Link>
      <div className='cadastro'>
        <h2 className='subtitle'>Cadastre-se</h2>
        <p>Ainda não possui conta? cadastre-se no site.</p>
        <Link
          className='button'
          to='/login/criar'
        >
          Cadastro
        </Link>
      </div>
    </section>
  );
}

export default LoginForm;
