import React from 'react';
import shortid from 'shortid';

import { Link } from 'react-router-dom';

import s from './menu-list.module.css';

const MenuList = ({ menu = [], match, location, addToCart }) =>
  menu.length > 0 ? (
    <div className={s.menuListContainer}>
      {menu.map(({ id, name, image, price }) => (
        <div className={s.menuContainer} key={shortid.generate()}>
          <li key={id} className={s.menuItem}>
            <Link
              to={{
                pathname: `${match.url}/${id}`,
                state: { from: location }
              }}
            >
              <img src={image} alt="Amazing food" />

              <br />
              <p>{name}</p>
            </Link>
            <span>Цена: {price}</span>
            <br />
            <br />
            <button type="button" onClick={() => addToCart(id)}>
              Добавить в корзину
            </button>
          </li>
        </div>
      ))}
    </div>
  ) : null;
export default MenuList;
