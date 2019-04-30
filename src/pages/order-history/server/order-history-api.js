import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3004';

const getAllUsersItems = () =>
  axios.get('/users').then(response => response.data);

const deleteUserItem = id =>
  axios.delete(`/users/${id}`).then(response => response.status === 200);

const getUserById = id =>
  axios.get(`/users/${id}`).then(response => response.data);

const addMenuItem = item =>
  axios.post('/users', item).then(response => response.data);

export { getAllUsersItems, deleteUserItem, getUserById, addMenuItem };
