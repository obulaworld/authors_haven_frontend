// react libraries
import React, { Component } from 'react';

// components
import ProfileIntro from './profileIntro/ProfileIntro';
import ProfileEdit from './profileEdit/ProfileEdit';

// fixture
import dummyArticle from '../../landingPage/Articles/fixture/dumyArticle';
import FollowLogCard from './FollowLogCard';

/**
 *
 * @class ProfileSidebar
 * @extends {Component}
 */
class ProfileSidebar extends Component {
  render() {
    return (
      <div className="profile-sidebar">
        <ProfileIntro bio={ dummyArticle.recentBodySmall } />
        <ProfileEdit openModal={ this.props.openModal } />
        <div className="profile-bookmark">
          <div className="sidebar-title d-flex">
            <h5><i className="fas fa-bookmark"></i><span>231</span>Bookmark</h5>
            <p>view all</p>
          </div>
          {
            dummyArticle.getListArticle(
            dummyArticle.recentTitle,
            dummyArticle.bookmarkBody,
            dummyArticle.recentImage,
            3
          )}
        </div>
        <div className="profile-follow-wrap">
          <div className="sidebar-title d-flex">
            <h5><i className="fas fa-users"></i><span>231</span>Followers</h5>
            <p>view all</p>
          </div>
          <div className="follow-log">
            <FollowLogCard />
            <FollowLogCard />
            <FollowLogCard />
            <FollowLogCard />
          </div>
        </div>
        <div className="profile-follow-wrap">
          <div className="sidebar-title d-flex">
            <h5><i className="fas fa-users"></i><span>231</span>Followings</h5>
            <p>view all</p>
          </div>
          <div className="follow-log">
            <FollowLogCard />
            <FollowLogCard />
            <FollowLogCard />
          </div>
        </div>
        <div className="profile-footer">
          <p>Community of authurs with passionate storytelling and writing skill.</p>
          <p>© 2018 Lotus team.</p>
        </div>
      </div>
    );
  }
};

export default ProfileSidebar;
