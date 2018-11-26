// react library
import React from 'react';

// third party library
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import Landing from '../containers/LandingPage/LandingPage';
import Signup from '../containers/singup/SingupContainer';
import VerifyEamilContainer from '../containers/singup/VerifyEamilContainer';
import UpdateContainer from '../containers/singup/UpdateUserContainer';
import Login from '../containers/Login/Login';

// Moduler Importations
import NotFound from './NotFound';
import Logout from './Logout/Logout';
import AuthenticatedRoute from './AuthenticatedRoute';
import CreateArticle from '../containers/article/CreateArticle';
import ViewArticle from '../containers/viewArticle/ViewArticle';
import Profile from '../containers/profile/Profile';
import ResetPassword from './ResetPassword/ResetPassword';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import NotificationAction from '../containers/notification/NotificationAction';
import CommentReply from '../containers/commentReply/CommentReply';

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
      <AuthenticatedRoute exact path='/article' component={CreateArticle} />
      <Route exact path='/viewarticle/:slug' component={ViewArticle} />
      <AuthenticatedRoute exact path='/profile/:username' component={Profile} />
      <Route exact path='/reset_password' component={ResetPassword} />
      <Route exact path='/forgot_password' component={ForgotPassword} />
      <Route exact path='/notify_action/:id' component={NotificationAction} />
      <Route exact path='/comments/:id' component={CommentReply} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
