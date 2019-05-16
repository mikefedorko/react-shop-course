/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { PureComponent } from 'react';
import { Animated } from 'react-animated-css';
import Button from 'react-bootstrap/Button';

// Font-Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import styles from './cart.module.css';

library.add(faShoppingBasket);

export default class CartPag extends PureComponent {
  handleAlert = () => {
    alert('Your order is accepted =*');
  };

  render() {
    const {
      products = [],
      removeFromCart,
      incrementAmount,
      decrementAmount,
      totalPrice
    } = this.props;
    return products.length > 0 ? (
      <div className={styles.container}>
        {products.map(({ id, name, amount, image, price, description }) => (
          <Animated animationIn="fadeIn" key={id}>
            <div className={styles.mealCard} key={id}>
              <div className={styles.mealImage}>
                <img src={image} alt="Product" width="250px" height="150px" />
              </div>
              <div className={styles.mealInfo}>
                <div className={styles.firstBlock}>
                  <b>{name}</b>
                  <div className={styles.amount}>
                    <Button
                      variant="outline-dark"
                      type="button"
                      onClick={() => incrementAmount(id)}
                      style={{ marginRight: '10px' }}
                    >
                      +
                    </Button>
                    <span>{amount}</span>
                    <Button
                      variant="outline-dark"
                      type="button"
                      onClick={() => decrementAmount(id)}
                      style={{ marginLeft: '10px' }}
                    >
                      -
                    </Button>
                  </div>
                  <span>${price}.00</span>
                </div>
                <div className={styles.secondBlock}>
                  <span>{description}</span>
                  <br />
                  <br />
                  <Button
                    variant="dark"
                    type="button"
                    onClick={() => removeFromCart(id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </Animated>
        ))}
        <div className={styles.thirdBlock}>
          <span>Total price: ${totalPrice}.00</span>
          <br />
          <Button
            variant="warning"
            type="button"
            size="lg"
            onClick={this.handleAlert}
          >
            CHECKOUT
          </Button>
        </div>
      </div>
    ) : (
      <div className={styles.emptyContainer}>
        <Animated animationIn="swing">
          <h2>
            Cart is Empty <FontAwesomeIcon icon="shopping-basket" />
          </h2>
        </Animated>
      </div>
    );
  }
}
