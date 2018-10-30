// react libraries
import React, { Component } from 'react';

// third-party libraries
import { hot } from 'react-hot-loader';

// components
import Main from './Main';
import Header from './Header';

/**
 * @desc
 */
class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <Main />
      </div>
    );
  }
}

export default hot(module)(App);
