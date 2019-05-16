/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';

import userConfig from '../../../../configs/user-nav';

import styles from './drop-down.module.css';

const DropDown = ({ onClick, onClose }) => (
  <Animated animationIn="flipInX" animationOut="flipOutX">
    <div className={styles.dropDown}>
      {userConfig.map(item => {
        return (
          <li key={item.name} className={styles.dropDownLinks}>
            <Link to={item.path} className={styles.dropDownList}>
              {item.name}
            </Link>
          </li>
        );
      })}
      <button type="button" onClick={onClick} className={styles.button}>
        Log out
      </button>
      <button type="button" onClick={onClose} className={styles.button}>
        Close
      </button>
    </div>
  </Animated>
);

export default DropDown;
