import { normalize } from 'normalizr';
import * as schemas from '../shemas/shema';
import types from './ActionTypes';

// Menu
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

// Loader
const fetchRequest = () => ({
  type: types.FETCH_REQUEST
});
const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error
});

// Cart
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

// Auth: Sign Up
const signUpRequest = () => ({
  type: types.SIGN_UP_REQUEST
});
const signUpSuccesss = data => ({
  type: types.SIGN_UP_SUCCESS,
  payload: data
});
const signUpError = error => ({
  type: types.SIGN_UP_ERROR,
  payload: { error }
});

// Auth: Sign In
const signInRequest = () => ({
  type: types.SIGN_IN_REQUEST
});
const signInSuccesss = data => ({
  type: types.SIGN_IN_SUCCESS,
  payload: data
});
const signInError = error => ({
  type: types.SIGN_IN_ERROR,
  payload: { error }
});

// Auth: Sign Out
const signOutRequest = () => ({
  type: types.SIGN_OUT_REQUEST
});
const signOutSuccess = () => ({
  type: types.SIGN_OUT_SUCCESS
});

// Auth: Refresh
const refreshUserStart = () => ({
  type: types.REFRESH_CURRENT_USER_START
});
const refreshUserSuccess = user => ({
  type: types.REFRESH_CURRENT_USER_SUCCESS,
  payload: {
    user
  }
});

export default {
  fetchData,
  fetchDataWithCategory,
  fetchCategory,
  fetchDataById,
  fetchRequest,
  fetchError,
  addToCart,
  removeFromCart,
  incrementAmount,
  decrementAmount,
  signUpRequest,
  signUpSuccesss,
  signUpError,
  signInRequest,
  signInSuccesss,
  signInError,
  signOutRequest,
  signOutSuccess,
  refreshUserStart,
  refreshUserSuccess
};
