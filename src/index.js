// react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import configureStore from '../src/store/configureStore'

// components
import Router from './components/Router';

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
    <Router />
    </Provider>),
   document.getElementById('root'));
