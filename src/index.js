// import react
import React from 'react';
import ReactDOM from 'react-dom';

// import bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import components
import AppRouter from './components/Router';
import './styles/index.scss'

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
