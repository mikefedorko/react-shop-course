import React from 'react';
import { connect } from 'react-redux';
import { Selectors, AsyncOperations } from '../../redux/menu';

import Nav from '../navigation/nav';
import UserMenu from '../user-menu/user-menu';
import Logo from '../../logo';
import logo from '../assets/logo.png';
import Auth from '../auth/auth';

import styles from './header-container.module.css';

const HeaderContainer = ({ isAuthenticated, user, onSignOut }) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Logo srcLink={logo} alt="Trattorio" />
    </div>
    <Nav isAuthenticated={isAuthenticated} />
    <div className={styles.userMenu}>
      <Auth isAuthenticated={isAuthenticated} />
    </div>
    {isAuthenticated && (
      <div className={styles.userMenu}>
        <UserMenu onSignOut={onSignOut} user={user} />
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
