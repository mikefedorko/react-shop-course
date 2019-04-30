import React from 'react';
import Nav from '../navigation/nav';
import UserMenu from '../user-menu/user-menu';
import Logo from '../logo/logo';
import logo from '../assets/logo.png';
import AvatarLogo from '../assets/avatar.jpeg';
import s from './header-container.module.css';

const HeaderContainer = () => (
  <header className={s.header}>
    <div className={s.logo}>
      <Logo srcLink={logo} alt="Awesome logo" width={140} height={100} />
    </div>
    <Nav />
    <div className={s.userMenu}>
      <UserMenu avatar={AvatarLogo} name="Bob Ross" />
    </div>
  </header>
);

export default HeaderContainer;
