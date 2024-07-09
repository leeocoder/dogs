import { Navigate, Route, Routes } from 'react-router-dom';

import LoginCreate from '../LoginCreate';
import LoginForm from '../LoginForm/LoginForm';
import LoginPasswordLost from '../LoginPasswordLost';
import LoginPasswordReset from '../LoginPasswordReset';
import { UserContext } from '../../contexts/UserContext';
import React from 'react';

const Login = () => {
  [];
  const { isLoggedIn } = React.useContext(UserContext);
  if (isLoggedIn) return <Navigate to='/conta' />;
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<LoginForm />}
        />
        <Route
          path='criar'
          element={<LoginCreate />}
        />
        <Route
          path='perdeu'
          element={<LoginPasswordLost />}
        />
        <Route
          path='resetar'
          element={<LoginPasswordReset />}
        />
      </Routes>
    </div>
  );
};

export default Login;
