// react libraries
import React, { Component } from 'react';

// third party libraries
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// components
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import Dropdown from '../Dropdown/Dropdown';


/**
 * @class Header
 * @param {objecy} event
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
    console.log(this.props);
    const { active } = this.state;
    return (
      <header className="l-ah-1">
        <div className="logo">
          <img src="/images/logo.png" alt="Logo"/>
        </div>
        <HeaderSearch/>
        { !this.props.isAuth
          ? <div className="index-link">
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <a className="nav-link" href="/login">Sign in</a>
                  </li>
                  <li className="nav-item signup">
                    <a className="nav-link" href="#">Get started</a>
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
