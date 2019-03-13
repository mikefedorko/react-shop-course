import React from 'react';

import Nav from './nav';

import UserMenu from './user-menu';

import Logo from './logo';

import logo from './logo.png';

const HeaderContainer = () => (
  <div>
    <Logo srcLink={logo} alt="Awesome logo" />
    <Nav />
    <UserMenu />
  </div>
);

export default HeaderContainer;
