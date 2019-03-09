import React from 'react';

import Nav from './Nav';

import UserMenu from './UserMenu';

import Logo from './Logo';

import logo from './logo.png';

const HeaderContainer = () => (
  <div>
    <Logo srcLink={logo} alt="Awesome logo" />
    <Nav />
    <UserMenu />
  </div>
);

export default HeaderContainer;
