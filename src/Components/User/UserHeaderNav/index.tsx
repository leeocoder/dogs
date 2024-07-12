import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

import FeedIcon from '../../../Assets/feed.svg?react';
import StatsIcon from '../../../Assets/estatisticas.svg?react';
import AddPhotoIcon from '../../../Assets/adicionar.svg?react';
import LogoutIcon from '../../../Assets/sair.svg?react';

import './user-header-nav.css';

const UserHeaderNav = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <nav className='userHeaderNav'>
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
  );
};

export default UserHeaderNav;
