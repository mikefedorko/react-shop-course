import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Selectors } from '../redux/menu';

const ProtectedRoute = ({
  component: Component,
  redirectTo = '/',
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: Selectors.isAuthenticated(state)
});

export default connect(mapStateToProps)(ProtectedRoute);
