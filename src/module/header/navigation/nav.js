import React from 'react';
import styles from './navigation.module.css';

const Nav = ({ items = [] }) => (
  <nav>
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item}>
          <a className={styles.link} href="/">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
