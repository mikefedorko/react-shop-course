import types from '../ActionTypes';

const menuItemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_DATA:
      return payload.ids;
    case types.FETCH_DATA_WITH_CATEGORY:
      return payload.ids;
    default:
      return state;
  }
};

export default menuItemsReducer;
