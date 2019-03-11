import React from 'react';
import HistoryList from './HistoryList';
import orderHistory from './order-history.json';

const Table = () => <HistoryList history={orderHistory} />;

export default Table;
