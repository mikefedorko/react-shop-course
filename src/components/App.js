import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HeaderContainer from './header';
import MainPage from '../pages/main';
import AboutPage from '../pages/about';
import AccountPage from '../pages/account';
// import AuthPage from './pages/auth';
import ContactPage from '../pages/contact';
import CartPage from '../pages/cart';
import MenuItemPage from '../pages/menu-item';
import MenuList from '../pages/menu-list';
import OrderHistoryPage from '../pages/order-history';
import PlannerPage from '../pages/planner';
import NotFoundPage from '../pages/not-found';

import routes from '../configs/routes';

const App = () => (
  <Fragment>
    <HeaderContainer />

    <Switch>
      <Route exact path={routes.MAIN} component={MainPage} />
      <Route exact path={routes.MENU} component={MenuList} />
      <Route exact path={routes.MENU_ITEM} component={MenuItemPage} />
      <Route path={routes.ABOUT} component={AboutPage} />
      <Route path={routes.CONTACT} component={ContactPage} />
      <Route path={routes.CART} component={CartPage} />
      <Route path={routes.ACCOUNT} component={AccountPage} />
      <Route path={routes.ORDER_HISTORY} component={OrderHistoryPage} />
      <Route path={routes.PLANNER} component={PlannerPage} />
      <Route path={routes.NOT_FOUND} component={NotFoundPage} />
      <Redirect from="*" to={routes.NOT_FOUND} />
    </Switch>
  </Fragment>
);

export default App;
