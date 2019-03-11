import React from 'react';
import HeaderView from './module/header/HeaderView';
import TableOfOrderHistory from './module/OrderHistory/TableOfOrderHistory';
import MenuView from './module/Menu/MenuView';
import SignIn from './module/Forms/SignIn';

const App = () => (
  <div>
    <HeaderView />
    <TableOfOrderHistory />
    <MenuView />
    <SignIn />
  </div>
);

export default App;
