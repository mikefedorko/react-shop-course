import React from 'react';

const ProductList = ({ menu }) => (
  <div>
    {menu.map(meal => (
      <section key={meal.id}>
        <h3>{meal.name}</h3>
        <p>{meal.description}</p>
        <img src={meal.image} alt="" width="200px" />
        <br />
        <span>{meal.price}</span>
        <ul>
          {meal.ingredients.map(ingridient => (
            <li>{ingridient}</li>
          ))}
        </ul>
      </section>
    ))}
  </div>
);

export default ProductList;
