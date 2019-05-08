import types from '../ActionTypes';

const categoryReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_CATEGORY:
      return payload;

    default:
      return state;
  }
};

export default categoryReducer;
