import React, { Fragment, Component, lazy, Suspense } from 'react';
import { Table, Button, Spinner } from 'react-bootstrap';
import { Animated } from 'react-animated-css';

import * as api from './api/order-history-api';

// import Spinner from '../../components/spinner/spinner';

import styles from './order-history.module.css';

const AsyncModalWindow = lazy(() =>
  import('./modal-window/modal-window' /* webpackChunkName: "modal-window" */)
);

export default class OrderHistoryPage extends Component {
  state = {
    users: [],
    isModalOpen: false,
    infoAboutQuery: {
      id: null,
      date: '',
      price: '',
      address: '',
      rating: ''
    }
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
    // eslint-disable-next-line no-shadow
    api.getUserById(id).then(({ id, date, price, address, rating }) => {
      this.toggleModal();
      this.setState({
        infoAboutQuery: {
          id,
          date,
          price,
          address,
          rating
        }
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
        {isModalOpen && (
          <Suspense
            fallback={
              <Spinner
                animation="border"
                role="status"
                className={styles.spinner}
              />
            }
          >
            <AsyncModalWindow
              infoAboutQuery={infoAboutQuery}
              onClick={this.toggleModal}
            />
          </Suspense>
        )}
        <Animated animationIn="fadeInLeft">
          <Table bordered hover className={styles.table}>
            <thead style={{ color: '#212121' }}>
              <tr>
                <th>Date</th>
                <th>Price</th>
                <th>Delivery adress</th>
                <th>Rating</th>
                <th>Deleting</th>
                <th>Learn More</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ id, date, price, address, rating }) => (
                <tr key={id}>
                  <td>{date}</td>
                  <td>${price}</td>
                  <td>{address}</td>
                  <td>{rating}</td>
                  <td className={styles.td}>
                    <Button
                      type="button"
                      variant="outline-danger"
                      className={styles.button}
                      onClick={() => this.handleDeleteUser(id)}
                    >
                      Delete
                    </Button>
                  </td>
                  <td className={styles.td}>
                    <Button
                      type="button"
                      variant="outline-success"
                      className={styles.button}
                      onClick={() => this.handleShowMoreInfo(id)}
                    >
                      More
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Animated>
      </Fragment>
    );
  }
}
