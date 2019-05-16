import React, { PureComponent, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './header';
import Footer from './footer';
import ContactPanel from './contact-panel';
import MainPage from '../pages/main';
import AboutPage from '../pages/about';
import AccountPage from '../pages/account';
import SignUpPage from '../pages/sign-up';
import SignInPage from '../pages/sign-in';
import ContactsPage from '../pages/contacts';
import CartPage from '../pages/cart';
import MenuItemPage from '../pages/menu-item';
import MenuList from '../pages/menu-list';
import OrderHistoryPage from '../pages/order-history';
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
        <Header />
        <Switch>
          <Route exact path={routes.MAIN} component={MainPage} />
          <Route exact path={routes.MENU} component={MenuList} />
          <Route exact path={routes.MENU_ITEM} component={MenuItemPage} />
          <Route path={routes.ABOUT} component={AboutPage} />
          <Route path={routes.CONTACT} component={ContactsPage} />
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

          <Route path={routes.NOT_FOUND} component={NotFoundPage} />
          <Redirect from="*" to={routes.NOT_FOUND} />
        </Switch>
        <ContactPanel />
        <Footer />
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
