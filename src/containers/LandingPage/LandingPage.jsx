// third-party libraries
import { connect } from 'react-redux';

// components
import LandingPage from '../../components/landingPage/LandingPage';

// actions
import markNotificationAsReadAction from '../../action/notification/readNotification';

const mapStateToProps = state => ({
  homeLogin: state.auth,
  notifications: state.getNotification,
});

const mapDispatchToProps = {
  markNotificationAsRead: (token, id, mark) => markNotificationAsReadAction(token, id, mark)
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
