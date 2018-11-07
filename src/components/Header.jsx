// react libraries
import React from 'react';

// third party libraries
import { Link } from 'react-router-dom';

/**
 * @desc renders header with links
 * @returns {object} header
*/
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
