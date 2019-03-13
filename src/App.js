import React, { Fragment } from 'react';
import HeaderView from './module/header/header-view';
import TableOfOrderHistory from './module/order-history/history-table';
import MenuContainer from './module/menu/menu-container';
import SignIn from './module/forms/sign-in';
import SignUp from './module/forms/sign-up';

const App = () => (
  <Fragment>
    <HeaderView />
    <TableOfOrderHistory />
    <MenuContainer />
    <SignIn />
    <SignUp />
  </Fragment>
);

export default App;
