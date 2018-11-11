// react libraries
import React, { Component } from 'react';

//Moduler importations
import Logo from './Logo';
import '../styles/loader.scss';
import '../styles/_form.scss';
/**
 * @desc renders home page
 */
class Login extends Component{
  render() {
    return (
        <div classNameName="login">
          <div className="container">
            <div className="row auth-h d-flex align-items-center">
              <div className="col-md-6 offset-md-3 text-center login-wrap">
                <Logo />
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <div className="form-wrap">
                      <h1 className="form-title">Please wait...</h1>
                      <div class="lds-roller align-items-center go-down"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Login;
