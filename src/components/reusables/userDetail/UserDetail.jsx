// react libraries
import React from 'react';

// third party libraries
import { Link } from 'react-router-dom';

// component
import Button from '../button/Button';

/**
 * @export UserDeatails
 */
export default function UserDeatails({ user, authorId,articleSlug }) {
  return (
    <div className='userDetail'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 d-flex justify-content-flex-start align-items-center'>
            <div>
              <div className='thumbnail' />
            </div>
            <div className='username-wrap'>
              <div className='username'>Mindsworth</div>
              <div className='notice d-flex justify-content-flex-start align-items-center'>
                <div className='date'>Nov 5</div>
                <div className='read-time'>5min read</div>
              </div>
            </div>
            <div>
              <Button type='follow-btn' text='Follow' />
            </div>
            <div className='l-ah-report'>
              <Button type='report-btn' text='Report' />
            </div>
            {user && authorId === user.id &&
            <div className='l-ah-report'>
              <Link to='/editarticle'><Button className="btn" type='submit' text='Edit' /></Link>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
