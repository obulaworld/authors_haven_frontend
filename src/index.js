// react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// state
import configureStore from './store/configureStore';

// components
import Auth from './helpers/TokenCheck';
import AppRouter from './components/Router';

// action
import { authenticateUser, logOutUser } from './action/auth';

// styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

const store = configureStore();
const token = localStorage.getItem('authorsHavenAuthToken');
const checker = Auth.verifyUserToken(token);

if (checker) {
  const user = localStorage.getItem('user');
  store.dispatch(authenticateUser(user));
} else {
  store.dispatch(logOutUser());
}

ReactDOM.render((
    <Provider store={store}>
    <AppRouter />
    </Provider>),
document.getElementById('root'));
