// react libraries
import React from 'react';

// third party libraries
<<<<<<< HEAD
import propTypes from 'prop-types';
=======
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

>>>>>>> updating an article

// component
import Button from '../button/Button';

// helpers
import updateFollowView from '../../../helpers/follow/updateFollowView';

/**
 * @export UserDeatails
 * @returns object
 */
<<<<<<< HEAD

const UserDeatails = ({
  author,
  onClick,
  userId,
  following,
  followingAction,
  user
}) => {
  const { text, action } = updateFollowView(followingAction, following);
=======
export default function UserDetail({ user, authorId, articleSlug }) {
>>>>>>> updating an article
  return (
    <div className='userDetail'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 d-flex justify-content-flex-start align-items-center'>
            <div>
              <div className='thumbnail' />
            </div>
            <div className='username-wrap'>
              <div className='username'>{author && author.firstname}</div>
              <div className='notice d-flex justify-content-flex-start align-items-center'>
                <div className='date'>Nov 5</div>
                <div className='read-time'>5min read</div>
              </div>
            </div>
            <div>
            {user.id !== userId && (
            <Button
                type='follow-btn'
                id={userId}
                action={action}
                onClick={onClick}
                text={text}
              />
            )}
            </div>
            {user.id !== userId && followingAction.progress === 'done' && (
            <div className='l-ah-report'>
              <Button type='report-btn' text='Report' />
            </div>
<<<<<<< HEAD
            )}
=======
            {
              user
              && (user.id === authorId
                && <div className="l-ah-report">
                  <Link to={`/article?slug=${articleSlug}`}><Button type="submit" href="" text="Edit"/></Link>
                </div>
              )
            }
>>>>>>> updating an article
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};

UserDeatails.propTypes = {
  author: propTypes.object,
  onClick: propTypes.func,
  userId: propTypes.number,
  following: propTypes.array,
  followingAction: propTypes.object,
  user: propTypes.object
=======
}

UserDetail.propTypes = {
  user: PropTypes.object,
  authorId: PropTypes.integer,
  articleSlug: PropTypes.string,
>>>>>>> updating an article
};
