// react libraries
import React from 'react';

// third party libraries
import PropTypes from 'prop-types';

/**
 * @desc Dropdown for use actions
 * @param {bool} active
 * @return {Component} Dropdown
 */
const Dropdown = ({ active }) => (
    <div className={`dropdown ${active && 'active'}`}>
      <ul>
        <li><a href="">Create</a></li>
      </ul>
      <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Statistics</a></li>
        <li><a href="#">Follower</a></li>
        <li><a href="#">Following</a></li>
      </ul>
      <ul>
        <li><a href="#">Settings</a></li>
      </ul>
      <ul>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </div>
);

Dropdown.propTypes = {
  active: PropTypes.string
};

export default Dropdown;
