// react libraries
import React from 'react';

// third-party libraries
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// action
import markNotificationAsReadAction from '../../action/notification/readNotification';


/**
 * @param {object} props
 * @desc reuseableInput
 * @return {object} input
*/
const NotificationAction = ({ readNotification, location }) => {
  const query = location.search.split('=');
  const notificationId = query[2];
  const base = query[1].split('&')[0];
  const targetitem = location.pathname.split('/')[2];

  const token = localStorage.getItem('authorsHavenAuthToken');
  readNotification(token, notificationId);
  return (
    <Redirect
      to={{
        pathname: `/${base}/${targetitem}`
      }}
    />
  );
};


const mapDispatchToProps = {
  readNotification: (token, id, mark) => markNotificationAsReadAction(token, id, mark)
};

NotificationAction.propTypes = {
  readNotification: PropTypes.func,
  location: PropTypes.object
};

export default connect(null, mapDispatchToProps)(NotificationAction);
