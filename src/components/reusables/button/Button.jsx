// react libraries
import React, { Component } from 'react';


// third party libraries
import PropTypes from 'prop-types';

/**
 * desc renders Button
*/
class Button extends Component {
  render() {
    const {
      type,
      text,
      onClick
    } = this.props;

    return (
      <button className={type} onClick={onClick}>
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
