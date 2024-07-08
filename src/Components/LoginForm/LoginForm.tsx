import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('httpS://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
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
        <label htmlFor='username'>Usuário:</label>
        <input
          type='text'
          id='username'
          name='username'
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <label htmlFor='password'>Senha:</label>
        <input
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type='submit'>Entrar</button>
        <Link to='/login/esqueci-senha'>Esqueci minha senha</Link>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  );
}

export default LoginForm;
