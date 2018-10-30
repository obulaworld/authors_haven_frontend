// react libraries
import React from 'react';

// third party library
import { Route, Redirect } from 'react-router-dom';

//Moduler Routes
import Auth from '../helpers/TokenCheck';

/**
 * desc renders header with links
*/
const AuthenticatedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
    Auth.verifyUserToken(localStorage.getItem('authorsHavenAuthToken')) ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default AuthenticatedRoute;
