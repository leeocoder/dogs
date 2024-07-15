import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

import FeedIcon from '../../../Assets/feed.svg?react';
import StatsIcon from '../../../Assets/estatisticas.svg?react';
import AddPhotoIcon from '../../../Assets/adicionar.svg?react';
import LogoutIcon from '../../../Assets/sair.svg?react';

import './user-header-nav.css';
import useMedia from '../../../Hooks/useMedia';

const UserHeaderNav = () => {
  const navigate = useNavigate();
  const { userLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const mobile = useMedia('(max-width: 40rem)');

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <>
      {mobile && (
        <button
          className={`mobileButton ${mobileMenu && 'mobile-button-active'}`}
          aria-label='Menu'
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${!mobile ? 'userHeaderNav' : 'userMobileNav'} ${
          mobileMenu && 'userMobileNavActive'
        }`}
      >
        <NavLink to='/conta'>
          <FeedIcon />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to='/conta/estatistica'>
          <StatsIcon />
          {mobile && 'Estatística'}
        </NavLink>
        <NavLink to='/conta/postar'>
          <AddPhotoIcon />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={handleLogout}>
          <LogoutIcon />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
