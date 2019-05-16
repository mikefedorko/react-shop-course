import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Animated } from 'react-animated-css';

import authMenuConfig from '../../../configs/auth-nav';

import styles from './auth.module.css';

const Auth = ({ isAuthenticated }) => (
  <Fragment>
    {!isAuthenticated ? (
      <Animated animationIn="fadeInRight" animationOut="fadeInLeft">
        <ul className={styles.list}>
          {authMenuConfig.map(item => (
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
        </ul>
      </Animated>
    ) : null}
  </Fragment>
);

export default Auth;
