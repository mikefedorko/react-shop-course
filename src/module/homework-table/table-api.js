import axios from 'axios';

const BASE_URL = 'http://localhost:3004/users';

const getAllUsersItems = () =>
  axios.get(BASE_URL).then(response => response.data);

const deleteUserItem = id =>
  axios.delete(`${BASE_URL}/${id}`).then(response => response.status === 200);

const getUserById = id =>
  axios.get(`${BASE_URL}/${id}`).then(response => response.data);

const addMenuItem = item =>
  axios.post(BASE_URL, item).then(response => response.data);

export { getAllUsersItems, deleteUserItem, getUserById, addMenuItem };
