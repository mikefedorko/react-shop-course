import React, { Component, Fragment } from 'react';
import * as TableApi from './table-api';
import ModalInfo from './modal-info';
import Spinner from './spinner';

export default class TableContainer extends Component {
  state = {
    users: [],
    isModalOpen: false,
    isLoading: false,
    infoAboutQuery: null,
    address: '',
    price: '',
    rating: ''
  };

  componentDidMount() {
    TableApi.getAllUsersItems().then(users => {
      this.setState({ users });
    });
  }

  handleDeleteUser = id => {
    TableApi.deleteUserItem(id).then(() => {
      this.setState(prevState => ({
        users: prevState.users.filter(item => item.id !== id)
      }));
    });
  };

  handleShowMoreInfo = id => {
    this.setState({ isLoading: true });
    TableApi.getUserById(id).then(item => {
      this.toggleModal();
      this.setState({
        infoAboutQuery: JSON.stringify(item),
        isLoading: false
      });
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleAddUserItem = evt => {
    evt.preventDefault();

    const { address, price, rating } = this.state;

    const date = new Date();

    let result = '';

    result += `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    const item = {
      date: result,
      address,
      price,
      rating
    };

    TableApi.addMenuItem(item).then(newItem => {
      this.setState(state => ({
        users: [...state.users, newItem]
      }));
    });

    this.reset();
  };

  reset = () => {
    this.setState({
      address: '',
      price: '',
      rating: ''
    });
  };

  render() {
    const {
      users,
      isModalOpen,
      infoAboutQuery,
      isLoading,
      address,
      price,
      rating
    } = this.state;
    return (
      <Fragment>
        <div>
          <table border="1">
            <tbody>
              <tr>
                <th>Date</th>
                <th>Price</th>
                <th>Delivery adress</th>
                <th>Rating</th>
              </tr>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.date}</td>
                  <td>{user.price}</td>
                  <td>{user.address}</td>
                  <td>{user.rating}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.handleDeleteUser(user.id)}
                    >
                      Удалить
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.handleShowMoreInfo(user.id)}
                    >
                      Подробнее
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isLoading && <Spinner />}
          {isModalOpen && (
            <ModalInfo>
              <div className="ModalWindow">
                <p>{infoAboutQuery}</p>
                <button type="button" onClick={this.toggleModal}>
                  Close
                </button>
              </div>
            </ModalInfo>
          )}
        </div>
        <br />
        <div>
          <form onSubmit={this.handleAddUserItem}>
            <label htmlFor="address">
              Adress
              <br />
              <input
                type="text"
                placeholder="Enter address"
                name="address"
                value={address}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label htmlFor="price">
              Price
              <br />
              <input
                type="text"
                placeholder="Enter price"
                name="price"
                value={price}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label htmlFor="rating">
              Rating
              <br />
              <input
                type="text"
                placeholder="Enter rating"
                name="rating"
                value={rating}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </Fragment>
    );
  }
}
