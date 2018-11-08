// react library
import React from 'react';

// third party library
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import Landing from './LandingPage/LandingPage.jsx';
import Login from '../containers/Login/Login';
import NotFound from './NotFound';
import Auth from './Auth';
import Logout from './Logout/Logout';
import AuthenticatedRoute from './AuthenticatedRoute';

const history = createBrowserHistory();

/**
 *@desc handles routing
 @returns {object} routes
 */
const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/Logout' component={Logout} />
      <AuthenticatedRoute exact path='/auth' component={Auth} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
