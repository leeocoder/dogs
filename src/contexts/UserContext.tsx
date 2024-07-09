import React from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../@types/api';
import { useNavigate } from 'react-router-dom';

const UserContext = React.createContext<any>({});

type UserContextProps = {
  children: React.ReactNode;
};

const UserStorage = ({ children }: UserContextProps) => {
  const [data, setData] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setIsLoggedIn(false);
      window.localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate]
  );

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
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenResponse = await fetch(url, options);
      if (!tokenResponse.ok)
        throw new Error(`Error: ${tokenResponse.statusText}`);
      const { token } = await tokenResponse.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/conta');
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const validateResponse = await fetch(url, options);
          if (!validateResponse.ok) throw new Error('Token inválido');
          await getUser(token);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        data,
        error,
        loading,
        isLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserStorage };
