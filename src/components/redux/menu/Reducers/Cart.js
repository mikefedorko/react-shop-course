import { combineReducers } from 'redux';

import types from '../ActionTypes';

const ids = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_TO_CART:
      return state.includes(payload.id) ? state : [...state, payload.id];

    case types.REMOVE_FROM_CART:
      return state.filter(id => id !== payload.id);

    case types.SIGN_OUT_REQUEST:
    case types.SIGN_OUT_SUCCESS:
      return [];

    default:
      return state;
  }
};

const amount = (state = {}, { type, payload }) => {
  switch (type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        [payload.id]: 1
        // Если в state есть ключ с id карточки которую нажали, то верни объект в котором распыли предыдущее
        // состояние, а для ключа [payload.id] (id кароточки на которую нажали) возьми предыдущее значение и
        // увеличь на 1. В другом случае для нового id распыли state и оставь 1 ([payload.id] - вычисляемое сво-во объекта).
      };
    case types.INCREMENT_AMOUNT:
      return {
        ...state,
        [payload.id]: state[payload.id] ? state[payload.id] + 1 : { ...state }
      };

    case types.DECREMENT_AMOUNT: {
      return state[payload.id] && state[payload.id] > 1
        ? { ...state, [payload.id]: state[payload.id] - 1 }
        : { ...state };
    }

    case types.REMOVE_FROM_CART: {
      const { [payload.id]: _, ...newState } = state;

      return newState;
    }

    case types.SIGN_OUT_REQUEST:
    case types.SIGN_OUT_SUCCESS:
      return {};

    default:
      return state;
  }
};

export default combineReducers({
  ids,
  amount
});
