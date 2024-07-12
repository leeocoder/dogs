import React from 'react';
import UserHeaderNav from '../UserHeaderNav';
import './user-header.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    const titleMapperByTitle: { [key: string]: string } = {
      ['/conta/estatistica']: 'Estatística',
      ['/conta/postar']: 'Poste sua Foto',
    };
    setTitle(titleMapperByTitle[pathname] || 'Minha Conta');
  }, [location]);

  return (
    <header className='userHeader'>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
