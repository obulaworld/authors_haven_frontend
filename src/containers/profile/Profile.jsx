// react libraries
import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';

// components
import UserProfile from '../../components/profile/Profile';

// actions
import { fetchUserProfile } from '../../action/userProfile';

const mapStateToProps = (state = {}) => ({
  loading: state.userProfile,
  userData: state.userProfile.user,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfile: username => dispatch(fetchUserProfile(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);



