/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';

import userNavItems from '../../../../configs/user-nav';

import s from './drop-down.module.css';

const DropDown = ({ onClick }) => (
  <div className={s.dropDown}>
    {userNavItems.map(item => {
      return (
        <li key={item.name}>
          <Link to={item.path} className={s.dropDownList}>
            {item.name}
          </Link>
        </li>
      );
    })}
    <button type="button" onClick={onClick}>
      Log out
    </button>
  </div>
);

export default DropDown;
