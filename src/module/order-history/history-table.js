import React from 'react';
import HistoryList from './history-list';
import orderHistory from '../database/order-history.json';

const Table = () => <HistoryList history={orderHistory} />;

export default Table;
