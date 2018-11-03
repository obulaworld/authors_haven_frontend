// react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import configureStore from '../src/store/configureStore'

// import bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// components
import AppRouter from './components/Router';
import './styles/index.scss';

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
    <AppRouter />
    </Provider>),
   document.getElementById('root'));