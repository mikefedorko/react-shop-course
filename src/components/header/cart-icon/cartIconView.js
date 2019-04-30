import React from 'react';
import s from './cartIcon.module.css';

const CartIcon = ({ amount }) => (
  <div className={s.container}>
    <img
      src="https://image.flaticon.com/icons/svg/263/263142.svg"
      width="30"
      alt="Cart Icon"
    />
    <span className={s.amount}>{amount}</span>
  </div>
);

export default CartIcon;
