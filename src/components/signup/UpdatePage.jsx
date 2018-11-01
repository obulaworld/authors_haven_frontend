// react libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// third-party libraries
import { Redirect } from 'react-router-dom';

// components
import Logo from '../reusables/Logo';
import UpdateAccountForm from './UpdateAccountForm';

/**
 * @class UpdatePage
 * @param {object} event
 * @desc renders update page
 */
class UpdatePage extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const [firstname, last] = data.get('fullname').split(' ');
    const lastname = last || firstname;
    data.set('firstname', firstname);
    data.set('lastname', lastname);
    data.set('email', this.props.location.verifiedUser.email);
    this.props.updateUser(data);
  }

  redirectTohomePage = () => (
    <Redirect
    to={{
      pathname: '/',
      user: this.props.updateAccount.user,
      isAuth: this.props.updateAccount.isAuth,
    }} />
  )

  render() {
    if (this.props.updateAccount.update === true) {
      return this.redirectTohomePage();
    }
    return (
        <div className="login">
          <div className="container">
            <div className="row auth-h d-flex align-items-center">
              <div className="col-md-6 offset-md-3 text-center login-wrap">
                <Logo />
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <div className="form-wrap">
                      <h1 className="form-title">Complete your registration</h1>
                        <UpdateAccountForm
                          handleSubmit={this.handleSubmit}
                          email={ this.props.location.verifiedUser.email}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

UpdatePage.propTypes = {
  updateAccount: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

export default UpdatePage;
