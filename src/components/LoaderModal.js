// react libraries
import React, { Component } from 'react';

//Moduler importations
import Logo from './Logo';
import '../styles/loader.scss';
import '../styles/_form.scss';
/**
 * @desc renders home page
 */
class LoaderModal extends Component{
  render() {
    return (
         <div className="modal fade" id="loader-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="form-wrap pb-5 text-center">
                                    <div className="col-md-6 offset-md-3 text-center">
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
            </div>
        </div>
    )
  }
}

export default LoaderModal;
