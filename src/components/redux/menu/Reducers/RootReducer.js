import { combineReducers } from 'redux';

import EntityReducer from './EntityReducer';
import MenuReducer from './MenuReducer';
import MenItemByIdReducer from './MenuItemByIdReducer';
import CategoryReducer from './CategoryReducer';
import LoadingReducer from './LoadingReducer';
import CartReducer from './CartReducer';
import ErrorReducer from './ErrorReducer';

export default combineReducers({
  menu: MenuReducer,
  cart: CartReducer,
  entities: EntityReducer,
  categories: CategoryReducer,
  menuItem: MenItemByIdReducer,
  loading: LoadingReducer,
  error: ErrorReducer
});
