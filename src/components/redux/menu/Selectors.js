import { createSelector } from 'reselect';

const getItemsIds = state => state.menu;
const getMenuEntities = state => state.entities.menu;
const getAllMenu = createSelector(
  [getItemsIds, getMenuEntities],
  (ids, entities) => ids.map(id => entities[id])
);

const getCategories = state => state.categories;
const getLoader = state => state.loading;
const getItemsById = state => state.menuItem;

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

export default {
  getAllMenu,
  getCategories,
  getItemsById,
  getLoader,
  getCartProducts,
  getCartProductsAmount
};
