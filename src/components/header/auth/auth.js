import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import authMenuConfig from '../../../configs/auth-nav';

import styles from './auth.module.css';

const activeStyles = {
  activeLink: {
    color: 'palevioletred',
    textDecoration: 'none'
  }
};

const Auth = ({ isAuthenticated }) => (
  <Fragment>
    {!isAuthenticated ? (
      <ul className={styles.list}>
        {authMenuConfig.map(item => (
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
    ) : null}
  </Fragment>
);

export default Auth;
