import types from '../ActionTypes';

const initialState = [];

const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_CATEGORY:
      return payload;

    default:
      return state;
  }
};

export default categoryReducer;
