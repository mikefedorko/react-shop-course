import types from '../ActionTypes';

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;
    case types.FETCH_DATA:
    case types.FETCH_ERROR:
    case types.FETCH_DATA_WITH_CATEGORY:
    case types.FETCH_DATA_BY_ID:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
