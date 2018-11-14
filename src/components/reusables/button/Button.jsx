// react libraries
import React, { Component } from 'react';


// third party libraries
import propTypes from 'prop-types';
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
  type: propTypes.String,
  text: propTypes.String,
  onClick: propTypes.func.isRequired,
};
export default Button;
