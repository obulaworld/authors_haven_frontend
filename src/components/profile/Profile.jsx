// react libraries
import React, { Component } from 'react';

// third-party libraries
import Loader from 'react-loader';

// components
import Header from '../reusables/header/Header';
import ProfileHeader from './profileHeader/ProfileHeader';
import ProfileSidebar from './profileSidebar/ProfileSidebar';
import ProfileEditModal from './profileEditModal/ProfileEditModal';

/**
 * @export
 * @class Profile
 * @extends {Component}
 */
export default class Profile extends Component {
  state = {
    openModal: false
  }

  componentDidMount() {
    const {
      match: { params: { username }},
    } = this.props;
    const userId = username.split('_')[1];
    this.props.fetchUserProfile(userId);
  }

  handleOpenModal = () => {
    this.setState({
      openModal: true
    });
  }

  handleCloseModal = () => {
    this.setState({
      openModal: false
    });
  }

  render() {
    const {
      loading,
      userData,
      auth
    } = this.props;

    const authUser = this.props.auth.user;
    const user = JSON.parse(authUser);
    const isAuth = this.props.auth.isAuth;

    return (
      <div className="l-ah-profile">
        <Header 
          isAuth={ isAuth }
          user={ user } />
        <ProfileEditModal openModal={ this.state.openModal }/>
        {
          loading.processing
            ? (<div><Loader 
                  color="#0FC86F" 
                  speed={1} 
                  className="spinner" /></div>) 
            : (
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <ProfileHeader
                      loggedUser={ user }
                      userData= { userData.user }
                      openModal={ this.state.openModal }
                      onOpenBtnClick={ this.handleOpenModal }
                      onCloseBtnClick={ this.handleCloseModal } />
                  </div>
                  <div className="col-md-4">
                    <ProfileSidebar
                      openModal={ this.state.openModal } />
                  </div>
                  <div className="col-md-8">
                    {/* <h1>Main</h1> */}
                  </div>
                </div>
              </div>
            )
        }
      </div>
    );
  }
}
