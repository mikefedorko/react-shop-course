import React from 'react';

import { withRouter } from 'react-router-dom';

import Comments from './comments';

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
  <div>
    <br />
    <button type="button" onClick={onClick}>
      Назад к меню
    </button>

    <article key={id} style={{ margin: '10px' }}>
      <img src={image} alt="Amazing dish" width="250px" />
      <h3>{name}</h3>
      <b>Цена: {price}</b>
      <br />
      <b>Категория: {category}</b>
      <br />
      <span>Описание: {description}</span>
      <h3>Ингридиенты:</h3>
      <ul>
        {ingredients.map(ingridient => (
          <li key={ingridient}>{ingridient}</li>
        ))}
      </ul>
      <Comments />
    </article>
  </div>
);

export default withRouter(MenuItemPage);
