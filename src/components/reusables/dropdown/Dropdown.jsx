import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

/**
 * @returns {object} element
 * @param {object} props
 */
export default function Dropdown(props) {
  const { active } = props;
  const menuArray = [
    { name:'Profile', link: '/profile' },
    { name: 'Statistics', link: '/'},
    { name: 'Follower', link: '/link'},
    { name: 'Following', link: '/link'}
  ];
  const dropdownArray = menuArray.map((menu, index) => <li key={index}><a href={menu.link}>{menu.name}</a></li>);
  return (
    <div className={`dropdown ${active && 'active'}`}>
      <div className="dropdown-inner">
        <ul>
          <li>
            <Link to="/article">Create</Link>
          </li>
        </ul>
        <ul>
          {dropdownArray}
        </ul>
        <ul>
          <li><a href="#">Settings</a></li>
        </ul>
        <ul>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  active: propTypes.bool
}
