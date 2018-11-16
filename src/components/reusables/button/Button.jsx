// react libraries
import React, { Component } from 'react';


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
      <button className={ type } onClick={ onClick }>
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  type: propTypes.string,
  text: propTypes.string,
  onClick: propTypes.func
}

export default Button;
