import types from '../ActionTypes';

const menuItemByIdReducer = (state = null, { type, payload }) => {
  switch (type) {
    case types.FETCH_DATA_BY_ID:
      return payload;
    default:
      return state;
  }
};

export default menuItemByIdReducer;
