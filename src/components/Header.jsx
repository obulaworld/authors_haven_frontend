// react libraries
import React from 'react';

// third party libraries
import { Router, Link } from 'react-router-dom';

/**
 * @desc renders header with links
 * @returns {object} header
*/
const Header = () => (
  <header>
    <nav>
      <ul>
        <Router>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        </Router>
      </ul>
    </nav>
  </header>
);

export default Header;
