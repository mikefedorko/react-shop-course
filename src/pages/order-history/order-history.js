import React, { Component, Fragment, lazy, Suspense } from 'react';

import * as api from './server/order-history-api';

import Spinner from '../../components/spinner/spinner';

const AsyncModalWindow = lazy(() =>
  import('./modal-window' /* webpackChunkName: "modal-window" */)
);

export default class OrderHistoryPage extends Component {
  state = {
    users: [],
    isModalOpen: false,
    infoAboutQuery: null
  };

  componentDidMount() {
    api.getAllUsersItems().then(users => {
      this.setState({ users });
    });
  }

  handleDeleteUser = id => {
    api.deleteUserItem(id).then(() => {
      this.setState(prevState => ({
        users: prevState.users.filter(item => item.id !== id)
      }));
    });
  };

  handleShowMoreInfo = id => {
    api.getUserById(id).then(item => {
      this.toggleModal();
      this.setState({
        infoAboutQuery: JSON.stringify(item)
      });
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { users, isModalOpen, infoAboutQuery } = this.state;

    return (
      <Fragment>
        <br />
        {isModalOpen && (
          <Suspense fallback={<Spinner />}>
            <AsyncModalWindow
              infoAboutQuery={infoAboutQuery}
              onClick={this.toggleModal}
            />
          </Suspense>
        )}
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
        </div>
      </Fragment>
    );
  }
}
