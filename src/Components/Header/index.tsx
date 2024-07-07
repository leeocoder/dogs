import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import Dog from '../../Assets/dogs.svg?react';

const Header = () => {
  return (
    <header>
      <nav className='container'>
        <Link
          to='/'
          aria-label='Dogs - Home'
        >
          <Dog />
        </Link>
        <Link to='/login'>Login / Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
