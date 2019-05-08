import React from 'react';
import { connect } from 'react-redux';
import { Selectors, AsyncOperations } from '../../redux/menu';

import Nav from '../navigation/nav';
import UserMenu from '../user-menu/user-menu';
import Logo from '../logo/logo';
import logo from '../assets/logo.png';
import AvatarLogo from '../assets/avatar.jpeg';
import Auth from '../auth/auth';

import s from './header-container.module.css';

const HeaderContainer = ({ isAuthenticated, user, onSignOut }) => (
  <header className={s.header}>
    <div className={s.logo}>
      <Logo srcLink={logo} alt="Awesome logo" width={140} height={100} />
    </div>
    <Nav isAuthenticated={isAuthenticated} />
    <div className={s.userMenu}>
      <Auth isAuthenticated={isAuthenticated} />
    </div>
    {isAuthenticated && (
      <div className={s.userMenu}>
        <UserMenu avatar={AvatarLogo} onSignOut={onSignOut} user={user} />
      </div>
    )}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: Selectors.isAuthenticated(state),
  user: Selectors.getUser(state)
});

const mapDispatchToProps = {
  onSignOut: AsyncOperations.signOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
