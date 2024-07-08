import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import Dog from '../../Assets/dogs.svg?react';

const Header = () => {
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
        <Link
          to='/login'
          className='login'
        >
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
