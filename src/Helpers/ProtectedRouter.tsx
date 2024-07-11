import React from 'react';
import { UserContext } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = React.useContext(UserContext);
  if (isLoggedIn === true) return children;
  if (!isLoggedIn === false) return <Navigate to='/login' />;
  return <></>;
};

export default ProtectedRouter;
