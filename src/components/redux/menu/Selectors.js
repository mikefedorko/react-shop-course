/* eslint-disable no-return-assign */
import { createSelector } from 'reselect';

// Menu
const getItemsIds = state => state.menu;
const getMenuEntities = state => state.entities.menu;
const getAllMenu = createSelector(
  [getItemsIds, getMenuEntities],
  (ids, entities) => ids.map(id => entities[id])
);
const getCategories = state => state.categories;
const getItemsById = state => state.menuItem;

// Loader
const getLoader = state => state.loading;

// Cart
const getCartProductIds = state => state.cart.ids;
const getCartProductAmounts = state => state.cart.amount;
const getCartProductsAmount = createSelector(
  getCartProductIds,
  ids => ids.length
);
const getCartProducts = createSelector(
  [getCartProductIds, getCartProductAmounts, getMenuEntities],
  (ids, amounts, entities) =>
    ids.map(id => ({
      ...entities[id],
      amount: amounts[id]
    }))
);

const getCartPrices = createSelector(
  [getCartProductIds, getCartProductAmounts, getMenuEntities],
  (ids, amounts, entities) => ids.map(id => entities[id].price * amounts[id])
);

const getCartSumOfPrices = createSelector(
  [getCartPrices],
  array => {
    let totalPrice = 0;
    array.map(item => {
      return (totalPrice += item);
    });
    return totalPrice;
  }
);

// Auth
const isAuthenticated = state => state.session.isAuthenticated;
const getToken = state => state.session.token;
const getUser = state => state.session.user;

export default {
  getAllMenu,
  getCategories,
  getItemsById,
  getLoader,
  getCartProducts,
  getCartProductsAmount,
  getCartSumOfPrices,
  isAuthenticated,
  getToken,
  getUser
};
