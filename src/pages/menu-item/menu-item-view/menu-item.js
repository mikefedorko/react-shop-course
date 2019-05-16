import React from 'react';

import { withRouter } from 'react-router-dom';

import styles from './menu-item.module.css';

const MenuItemPage = ({
  id,
  name,
  description,
  image,
  price,
  category,
  ingredients = [],
  onClick
}) => (
  <div className={styles.container}>
    <article key={id}>
      <div className={styles.mainInvormation}>
        <div className={styles.image}>
          <img src={image} alt="Amazing dish" />
        </div>
        <div className={styles.description}>
          <h1>{name}</h1>
          <b>Price: ${price}.00</b>
          <br />
          <b>Category: {category}</b>
          <br />
          <br />
          <span>{description}</span>
          <br />
          <br />
          <h1>Ingredients:</h1>
          <ul
            style={{
              fontSize: '18px',
              display: 'flex',
              flexWrap: 'wrap',
              paddingLeft: '19px'
            }}
          >
            {ingredients.map(ingridient => (
              <li key={ingridient} style={{ marginRight: '25px' }}>
                {ingridient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button type="button" onClick={onClick} className={styles.button}>
        Back to Menu
      </button>
    </article>
  </div>
);

export default withRouter(MenuItemPage);
