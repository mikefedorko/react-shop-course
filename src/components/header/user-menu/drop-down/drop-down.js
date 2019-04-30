/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';

import userNavItems from '../../../../configs/user-nav';

import s from './drop-down.module.css';

const DropDown = () => (
  <div className={s.dropDown}>
    {userNavItems.map(item => {
      return (
        // eslint-disable-next-line no-console
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li key={item.name}>
          <Link to={item.path} className={s.dropDownList}>
            {item.name}
          </Link>
        </li>
      );
    })}
    <button type="button">Log out</button>
  </div>
);

export default DropDown;
