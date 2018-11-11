// third-party libraries
import { connect } from 'react-redux';

// components
import LandingPage from '../../components/landingPage/LandingPage';


const mapStateToProps = state => ({
  homeLogin: state.auth
});

export default connect(mapStateToProps)(LandingPage);
