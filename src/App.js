import React, { Component, Fragment } from 'react';
import HeaderContainer from './module/header/header-container/header-container';
import ModalContainer from './module/header/modal-window/modal-container';
import TableContainer from './module/homework-table/table-container';
// import TableOfOrderHistory from './module/order-history/history-table';
// import MenuContainer from './module/menu/menu-container';
// import SignIn from './module/forms/sign-in';
// import SignUp from './module/forms/sign-up';

export default class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <br />
        <ModalContainer />
        <TableContainer />
        {/* <TableOfOrderHistory />
				<MenuContainer />
			<SignIn />
			<SignUp /> */}
      </Fragment>
    );
  }
}
