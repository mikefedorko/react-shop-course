import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import s from './MenuList.module.css';

const MenuList = ({ menu = [], match, location }) =>
  menu.map(({ id, name, image, price }) => (
    <li key={id} className={s.menuItem}>
      <Link
        to={{
          pathname: `${match.url}/${id}`,
          state: { from: location }
        }}
      >
        <p>{name}</p>
      </Link>
      <img src={image} alt="Amazing food" width="180px" />
      <br />
      <span>Цена: {price}</span>
    </li>
  ));

export default withRouter(MenuList);
