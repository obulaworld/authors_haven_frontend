// react libraries
import React, { Component } from 'react';

// Moduler importations
import Header from './Header';

/**
 * @desc renders home page
 */
class Auth extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>All Articles</h1>
      </div>
    );
  }
}

export default Auth;
