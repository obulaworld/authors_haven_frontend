// react libraries
import React from 'react';

// third party libraries
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * desc renders Button
 * @return Button compont
*/
const Button = ({ text }) => (
    <Link to='/signup'>
      <button className="btn">
        {text}
      </button>
  </Link>
);

Button.propTypes = {
  text: PropTypes.string
};

export default Button;
