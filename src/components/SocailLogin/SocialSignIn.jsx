import React, { Fragment } from 'react';


const SocialSignIn = () => (
    <Fragment>
        <div className="social-wrap text-center">
            <p>Social sign-in</p>
            <div className="social-inner d-flex justify-content-center">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-google"></i></a>
            </div>
      </div>
    </Fragment>
);

export default SocialSignIn;
