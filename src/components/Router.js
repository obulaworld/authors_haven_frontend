// react library
import React from 'react';

// third party library
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import Landing from './LandingPage/LandingPage';
import NotFound from './NotFound';
import Auth from './Auth';
import AuthenticatedRoute from './AuthenticatedRoute';
import Login from './Login';

const history = createBrowserHistory();
/**
 *@desc handles routing
 */
const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/login' component={Login} />
      <AuthenticatedRoute exact path='/auth' component={Auth} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
