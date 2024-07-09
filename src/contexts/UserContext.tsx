import React from 'react';
import { TOKEN_POST, USER_GET } from '../@types/api';

const UserContext = React.createContext<any>({});

type UserContextProps = {
  children: React.ReactNode;
};

const UserStorage = ({ children }: UserContextProps) => {
  const [data, setData] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function getUser(token: string) {
    const { options, url } = USER_GET(token);
    const response = await fetch(url, options);
    if (!response.ok) {
      setError('Falha ao obter dados do usuário');
      return;
    }
    const json = await response.json();
    setData(json);
    setIsLoggedIn(true);
  }

  async function userLogin(username: string, password: string) {
    const { url, options } = TOKEN_POST({ username, password });
    const tokenResponse = await fetch(url, options);
    if (!tokenResponse.ok) {
      setError('Falha ao efetuar login');
      return;
    }
    const { token } = await tokenResponse.json();
    window.localStorage.setItem('token', token);

    getUser(token);
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserStorage };
