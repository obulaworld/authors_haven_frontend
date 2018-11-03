// react libraries
import React, { Component } from 'react';

// Moduler importations
import Header from './Header';

/**
 * @desc renders home page
 */
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Welcome to Author's Haven, Everyone</h1>
      </div>
    );
  }
}

export default Home;
