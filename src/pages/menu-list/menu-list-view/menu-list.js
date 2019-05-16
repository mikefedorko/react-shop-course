import React, { Fragment } from 'react';
import shortid from 'shortid';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import styles from './menu-list.module.css';

const MenuList = ({ menu = [], match, location, addToCart, isAuthenticated }) =>
  menu.length > 0 ? (
    <div className={styles.menuListContainer}>
      {menu.map(({ id, name, image, price }) => (
        <div className={styles.menuContainer} key={shortid.generate()}>
          <li key={id} className={styles.menuItem}>
            <img src={image} alt="Amazing food" />
            <br />
            <Link
              to={{
                pathname: `${match.url}/${id}`,
                state: { from: location }
              }}
            >
              {name}
            </Link>
            <br />
            <span>${price}.00</span>
            <br />
            <br />
            {isAuthenticated && (
              <Fragment>
                <Button
                  variant="outline-dark"
                  type="button"
                  onClick={() => addToCart(id)}
                >
                  Add to cart
                </Button>
              </Fragment>
            )}
          </li>
        </div>
      ))}
    </div>
  ) : null;

export default MenuList;
