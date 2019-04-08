import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  activeLink: {
    color: 'palevioletred',
    textDecoration: 'none'
  },

  divStyle: {
    borderBottom: ' 2px solid grey'
  }
};

const MainMenu = () => (
  <div style={styles.divStyle}>
    <NavLink to="/" exact activeStyle={styles.activeLink}>
      Главная
    </NavLink>
    <NavLink to="/menu" activeStyle={styles.activeLink}>
      Меню
    </NavLink>
  </div>
);

export default MainMenu;
