import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainMenu from './MainMenu';
import MenuPage from '../pages/MenuPage';
import MainPage from '../pages/MainPage';
import ItemPage from '../pages/ItemPage';
import NotFoundPage from '../pages/NotFound';
import AddMenuItem from '../pages/AddMenuItem';

// import routes from '../configs/routes';

const App = () => (
  <Fragment>
    <MainMenu />

    <Switch>
      <Route path="/menu" exact component={MenuPage} />
      <Route path="/" exact component={MainPage} />
      <Route path="/menu/add" exact component={AddMenuItem} />
      <Route path="/menu/:id" component={ItemPage} />
      <Route path="/404" component={NotFoundPage} />
      <Redirect from="*" to="/404" />
    </Switch>
  </Fragment>
);

export default App;
