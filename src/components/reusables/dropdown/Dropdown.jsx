import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

/**
 * @returns {object} element
 * @param {object} props
 */
export default function Dropdown(props) {
  const { active } = props;
  return (
    <div className={`dropdown ${active && 'active'}`}>
      <div className="dropdown-inner">
        <ul>
          <li>
            <Link to="./detail">Create</Link>
          </li>
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
          <li><a href="#">Log Out</a></li>
        </ul>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  active: propTypes.string
}
