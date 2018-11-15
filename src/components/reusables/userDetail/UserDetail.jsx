// react libraries
import React from 'react';

// third party libraries
import propTypes from 'prop-types';

// component
import Button from '../button/Button';

/**
 * @desc
 * @param {object} user
 * @return UserDeatails
 */
const UserDeatails = ({ user }) => (
    <div className='userDetail'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 d-flex justify-content-flex-start align-items-center'>
            <div>
              <div className='thumbnail' />
            </div>
            <div className="username-wrap">
              <div className="username">{user && user.firstname}</div>
              <div className="notice d-flex justify-content-flex-start align-items-center">
                <div className="date">Nov 5</div>
                <div className="read-time">5min read</div>
              </div>
            </div>
            <div>
              <Button type='follow-btn' text='Follow' />
            </div>
            <div className='l-ah-report'>
              <Button type='report-btn' text='Report' />
            </div>
          </div>
        </div>
      </div>
    </div>
);

UserDeatails.propTypes = {
  user: propTypes.object
};

export default UserDeatails;
