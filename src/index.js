// IMPORT REACT
import React from 'react';
import ReactDOM from 'react-dom';

// IMPORT BOOTSTRAP
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// IMPORT COMPONENTS
import AppRouter from './components/Router';
import './index.scss'

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
