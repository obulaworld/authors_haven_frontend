// react library
import React from 'react';

// third party library
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import Landing from '../containers/landingPage/LandingPage';
import Signup from '../containers/singup/SingupContainer';
import VerifyEamilContainer from '../containers/singup/VerifyEamilContainer';
import UpdateContainer from '../containers/singup/UpdateUserContainer';
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
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/verifyEmail' component={VerifyEamilContainer} />
      <Route exact path='/user/update' component={UpdateContainer} />
      <Route exact path='/Logout' component={Logout} />
      <AuthenticatedRoute exact path='/auth' component={Auth} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
