/* eslint-disable dot-notation */
import axios from 'axios';
import actions from './Actions';
import selectors from './Selectors';

axios.defaults.baseURL = 'http://localhost:3004';

const getAllMenuItems = () => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .get('/menu')
    .then(response => {
      dispatch(actions.fetchData(response.data));
    })
    .catch(error => dispatch(actions.fetchError(error)));
};

const getMenuItemsWithCategory = category => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .get(`/menu?category=${category}`)
    .then(response => {
      dispatch(actions.fetchDataWithCategory(response.data));
    })
    .catch(error => dispatch(actions.fetchError(error)));
};

const getCategories = () => dispatch => {
  axios
    .get('/categories')
    .then(response => {
      dispatch(actions.fetchCategory(response.data));
    })
    .catch(error => dispatch(actions.fetchError(error)));
};

const getMenuItemById = id => dispatch => {
  dispatch(actions.fetchRequest());

  axios
    .get(`/menu/${id}`)
    .then(response => {
      dispatch(actions.fetchDataById(response.data));
    })
    .catch(error => dispatch(actions.fetchError(error)));
};

// Auth
const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = null;
};

const signUp = credentials => dispatch => {
  dispatch(actions.signUpRequest());

  axios
    .post('http://localhost:4040/auth/signup', credentials)
    .then(({ data }) => {
      setAuthHeader(data.token);
      dispatch(actions.signUpSuccesss(data));
    })
    .catch(error => dispatch(actions.signUpError(error)));
};

const signIn = credentials => dispatch => {
  dispatch(actions.signInRequest());

  axios
    .post('http://localhost:4040/auth/signin', credentials)
    .then(({ data }) => {
      setAuthHeader(data.token);
      dispatch(actions.signInSuccesss(data));
    })
    .catch(error => dispatch(actions.signInError(error)));
};

const signOut = () => dispatch => {
  dispatch(actions.signOutRequest());

  axios.post('http://localhost:4040/auth/signout').then(() => {
    clearAuthHeader();
    dispatch(actions.signOutSuccess());
  });
};

const refreshCurrentUser = () => (dispatch, getState) => {
  const token = selectors.getToken(getState());

  if (!token) return;

  setAuthHeader(token);

  dispatch(actions.refreshUserStart());

  axios
    .get('http://localhost:4040/auth/current')
    .then(({ data }) => {
      dispatch(actions.refreshUserSuccess(data.user));
    })
    .catch(error => {
      // dispach екшен чтобы убрать токен из state
      clearAuthHeader();
      // eslint-disable-next-line no-console
      console.log('Error while refreshing: ', error);
    });
};

export default {
  getAllMenuItems,
  getMenuItemsWithCategory,
  getCategories,
  getMenuItemById,
  signUp,
  signIn,
  signOut,
  refreshCurrentUser
};
