import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderSearch from '../headerSearch/HeaderSearch';

import Dropdown from '../dropdown/Dropdown';
/**
 * @class Header
 * @extends {Component}
 * @param {object} event
 */
export default class Header extends Component {
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
    // const token = localStorage.getItem('token');
    const { active } = this.state;
    return (
      <header className="l-ah-1">
        <div className="logo">
          <img src="../../imgs/logo.png" alt="Logo"/>
        </div>
        <HeaderSearch/>
        {/* <div className="index-link">
          <ul className="nav justify-content-end">
              <li className="nav-item">
                  <a className="nav-link" href="#">Sign in</a>
              </li>
              <li className="nav-item signup">
                  <a className="nav-link" href="#">Get started</a>
              </li>
          </ul>
        </div> */}
        <div className="dashboard-menu">
          <div>
            <div className="thumbnail"></div>
          </div>
          <div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="#">Mindsworth</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fas fa-bell"></i></a>
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
          </div>
          <Dropdown active={active} />
        </div>
      </header>
    );
  }
}
