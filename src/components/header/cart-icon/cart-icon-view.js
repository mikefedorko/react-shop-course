import React from 'react';

import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import s from './cart-icon.module.css';

library.add(faCartPlus);

const CartIcon = ({ amount }) => (
  <Animated animationIn="fadeInDown" animationOut="fadeOutUp">
    <div className={s.container}>
      <FontAwesomeIcon icon="cart-plus" style={{ fontSize: '25px' }} />
      <span className={s.amount}>{amount}</span>
    </div>
  </Animated>
);

export default CartIcon;
