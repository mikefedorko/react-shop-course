import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import EntityReducer from './Reducers/Entity';
import MenuReducer from './Reducers/Menu';
import MenItemByIdReducer from './Reducers/MenuItemById';
import CategoryReducer from './Reducers/Category';
import LoadingReducer from './Reducers/Loading';
import CartReducer from './Reducers/Cart';
import ErrorReducer from './Reducers/Error';
import SessionReducer from './Reducers/Session';

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token']
};

export default combineReducers({
  menu: MenuReducer,
  cart: CartReducer,
  entities: EntityReducer,
  categories: CategoryReducer,
  menuItem: MenItemByIdReducer,
  loading: LoadingReducer,
  error: ErrorReducer,
  session: persistReducer(sessionPersistConfig, SessionReducer)
});
