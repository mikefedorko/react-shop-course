import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import userMenuConfig from '../../../configs/main-nav';
import cartConfig from '../../../configs/cart';

import styles from './navigation.module.css';

const activeStyles = {
  activeLink: {
    color: 'palevioletred',
    textDecoration: 'none'
  }
};

const Nav = ({ isAuthenticated }) => (
  <Fragment>
    <nav>
      <ul className={styles.list}>
        {userMenuConfig.map(item => (
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
    <div>
      {isAuthenticated && (
        <li key={cartConfig.name}>
          <NavLink exact to={cartConfig.path} className={styles.link}>
            {cartConfig.name}
          </NavLink>
        </li>
      )}
    </div>
  </Fragment>
);

export default Nav;
