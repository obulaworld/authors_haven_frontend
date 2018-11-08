// react libraries
import React from 'react';
import { Redirect } from 'react-router-dom';

// action
import { logOutUser } from '../action/auth';

/**
 * @desc renders home page
 * @return {object} redirect
 */
const Auth = () => {
  localStorage.removeItem('authorsHavenAuthToken');
  localStorage.removeItem('user');
  logOutUser();
  return (
    <Redirect to='/' />
  );
};

export default Auth;
