// Import react library
import React, { Component } from 'react';

// third-party libraries
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import HeaderSearch from '../headerSearch/HeaderSearch';
import Dropdown from '../dropdown/Dropdown';


/**
 * @class Header
 * @extends {Component}
 * @param {object} event
 */
class Header extends Component {
  state = {
    active: false,
  }

  handleDropDown = (event) => {
    event.preventDefault();
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <header className="l-ah-1">
       <img src="/images/logo.png" />
        <HeaderSearch/>
        { !this.props.isAuth ? <div className="index-link">
          <ul className="nav justify-content-end">
              <li className="nav-item">
                  <a className="nav-link" href="/login">Sign in</a>
              </li>
              <li className="nav-item signup">
                  <a className="nav-link" href="/signup">Get started</a>
              </li>
          </ul>
        </div> 
        : <div className="dashboard-menu">
          <div>
            <div className="thumbnail"></div>
          </div>
          <div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="#">{this.props.user.firstname}</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fas fa-bell"/>
                    </a>
                </li>
            </ul>
          </div>
          <div className="icon-wrap">
            <div
              className="icon"
              onClick={this.handleDropDown}
            >
              <div className="line"></div>
            </div>
            <Dropdown active={this.state.active} />
          </div>
        </div>
      }
      </header>
    );
  }
}

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default Header;
