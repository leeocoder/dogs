import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import Dog from '../../Assets/dogs.svg?react';
import { UserContext } from '../../contexts/UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <header className='header'>
      <nav className='container nav'>
        <Link
          to='/'
          aria-label='Dogs - Home'
          className='logo'
        >
          <Dog />
        </Link>
        {!data && (
          <Link
            to='/login'
            className='loginHeader'
          >
            Login / Criar
          </Link>
        )}
        {data && (
          <Link
            to='/conta'
            className='loginHeader'
          >
            Minha conta
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
