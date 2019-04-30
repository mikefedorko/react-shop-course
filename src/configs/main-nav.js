import React from 'react';
import routes from './routes';
import CartLink from '../components/header/cart-icon/cartIconContainer';

export default [
  {
    name: 'Menu',
    path: routes.MENU
  },
  {
    name: 'About',
    path: routes.ABOUT
  },
  {
    name: 'Contact',
    path: routes.CONTACT
  },
  {
    name: <CartLink />,
    path: routes.CART
  }
];
