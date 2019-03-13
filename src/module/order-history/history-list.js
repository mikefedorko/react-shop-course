import React from 'react';

const HistoryList = ({ history }) => (
  <div>
    <table border="1">
      <tr>
        <th>Date</th>
        <th>Price</th>
        <th>Delivery adress</th>
        <th>Rating</th>
      </tr>
      {history.map(orders => (
        <tr key={orders.id}>
          <td>{orders.date}</td>
          <td>{orders.price}</td>
          <td>{orders.address}</td>
          <td>{orders.rating}</td>
        </tr>
      ))}
    </table>
    <br />
  </div>
);

export default HistoryList;
