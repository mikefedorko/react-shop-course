import React from 'react';

import s from './cart.module.css';

const CartPage = ({
  products = [],
  removeFromCart,
  incrementAmount,
  decrementAmount
}) =>
  products.length > 0 ? (
    <table className={s.table}>
      <tbody>
        {products.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>
              <button
                type="button"
                onClick={() => incrementAmount(id)}
                style={{ marginRight: '5px' }}
              >
                +
              </button>
              {amount}
              <button
                type="button"
                onClick={() => decrementAmount(id)}
                style={{ marginLeft: '5px' }}
              >
                -
              </button>
            </td>
            <td>
              <button type="button" onClick={() => removeFromCart(id)}>
                Удалить
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h2>В корзине нет товаров!</h2>
  );

export default CartPage;
