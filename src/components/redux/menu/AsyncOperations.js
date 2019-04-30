import axios from 'axios';
import actions from './Actions';

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

export default {
  getAllMenuItems,
  getMenuItemsWithCategory,
  getCategories,
  getMenuItemById
};
