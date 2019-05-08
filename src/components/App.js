import React, { PureComponent, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderContainer from './header';
import MainPage from '../pages/main';
import AboutPage from '../pages/about';
import AccountPage from '../pages/account';
import SignUpPage from '../pages/sign-up';
import SignInPage from '../pages/sign-in';
import ContactPage from '../pages/contact';
import CartPage from '../pages/cart';
import MenuItemPage from '../pages/menu-item';
import MenuList from '../pages/menu-list';
import OrderHistoryPage from '../pages/order-history';
import PlannerPage from '../pages/planner';
import NotFoundPage from '../pages/not-found';

import routes from '../configs/routes';
import ProtectedRoute from './protected-route';

import { AsyncOperations } from './redux/menu';

class App extends PureComponent {
  componentDidMount() {
    const { refreshCurrentUser } = this.props;

    refreshCurrentUser();
  }

  render() {
    return (
      <Fragment>
        <HeaderContainer />

        <Switch>
          <Route exact path={routes.MAIN} component={MainPage} />
          <Route exact path={routes.MENU} component={MenuList} />
          <Route exact path={routes.MENU_ITEM} component={MenuItemPage} />
          <Route path={routes.ABOUT} component={AboutPage} />
          <Route path={routes.CONTACT} component={ContactPage} />
          <Route path={routes.SIGN_UP} component={SignUpPage} />
          <Route path={routes.SIGN_IN} component={SignInPage} />

          <ProtectedRoute
            path={routes.CART}
            redirectTo={routes.SIGN_IN}
            component={CartPage}
          />
          <ProtectedRoute
            path={routes.ACCOUNT}
            redirectTo={routes.SIGN_IN}
            component={AccountPage}
          />
          <ProtectedRoute
            path={routes.ORDER_HISTORY}
            redirectTo={routes.SIGN_IN}
            component={OrderHistoryPage}
          />
          <ProtectedRoute
            path={routes.PLANNER}
            redirectTo={routes.SIGN_IN}
            component={PlannerPage}
          />

          <Route path={routes.NOT_FOUND} component={NotFoundPage} />
          <Redirect from="*" to={routes.NOT_FOUND} />
        </Switch>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  refreshCurrentUser: AsyncOperations.refreshCurrentUser
};

export default connect(
  null,
  mapDispatchToProps
)(App);
