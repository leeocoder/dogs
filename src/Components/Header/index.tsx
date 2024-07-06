import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='container'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login / Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
