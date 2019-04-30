import React from 'react';
import { NavLink } from 'react-router-dom';

import userMenuItems from '../../../configs/main-nav';

import styles from './navigation.module.css';

const activeStyles = {
  activeLink: {
    color: 'palevioletred',
    textDecoration: 'none'
  }
};

const Nav = () => (
  <nav>
    <ul className={styles.list}>
      {userMenuItems.map(item => (
        <li key={item.name}>
          <NavLink
            exact
            to={item.path}
            className={styles.link}
            activeStyle={activeStyles.activeLink}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
