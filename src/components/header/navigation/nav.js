import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { Animated } from 'react-animated-css';

import { MenuConfig, ExternalLinksConfig } from '../../../configs/main-nav';
import cartConfig from '../../../configs/cart';

import styles from './navigation.module.css';

const Nav = ({ isAuthenticated }) => (
  <Fragment>
    <nav className={styles.nav}>
      <Animated animationIn="bounceInDown" animationOut="fadeOut">
        <ul className={styles.list}>
          {MenuConfig.map(item => (
            <li key={item.name}>
              <NavLink
                exact
                to={item.path}
                className={styles.link}
                activeStyle={{
                  color: '#ffdd40'
                }}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          {ExternalLinksConfig.map(item => (
            <li key={item.key}>
              <a href={item.path} className={styles.link} target="blank">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </Animated>
    </nav>
    {isAuthenticated && (
      <div className={styles.cartContainer}>
        <li key={cartConfig.name}>
          <NavLink
            exact
            to={cartConfig.path}
            className={styles.link}
            activeStyle={{
              color: '#ffdd40'
            }}
          >
            {cartConfig.name}
          </NavLink>
        </li>
      </div>
    )}
  </Fragment>
);

export default Nav;
