import { normalize } from 'normalizr';
import * as schemas from '../shemas/shema';
import types from './ActionTypes';

const fetchData = data => {
  const normalizedMenu = normalize(data, [schemas.MenuSchema]);

  return {
    type: types.FETCH_DATA,
    payload: {
      ids: Object.keys(normalizedMenu.entities.menu),
      entities: normalizedMenu.entities
    }
  };
};

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error
});

const fetchDataWithCategory = data => {
  const normalizedMenu = normalize(data, [schemas.MenuWithCategoryShema]);
  console.log(normalizedMenu);

  return {
    type: types.FETCH_DATA_WITH_CATEGORY,
    payload: {
      ids: Object.keys(normalizedMenu.entities.menuItem)
    }
  };
};

const fetchCategory = category => ({
  type: types.FETCH_CATEGORY,
  payload: category
});

const fetchDataById = item => ({
  type: types.FETCH_DATA_BY_ID,
  payload: item
});

const fetchRequest = () => ({
  type: types.FETCH_REQUEST
});

const addToCart = id => ({
  type: types.ADD_TO_CART,
  payload: {
    id
  }
});

const removeFromCart = id => ({
  type: types.REMOVE_FROM_CART,
  payload: {
    id
  }
});

const incrementAmount = id => ({
  type: types.INCREMENT_AMOUNT,
  payload: {
    id
  }
});

const decrementAmount = id => ({
  type: types.DECREMENT_AMOUNT,
  payload: {
    id
  }
});

export default {
  fetchData,
  fetchError,
  fetchDataWithCategory,
  fetchCategory,
  fetchDataById,
  fetchRequest,
  addToCart,
  removeFromCart,
  incrementAmount,
  decrementAmount
};
