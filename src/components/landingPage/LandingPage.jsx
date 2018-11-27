// react libraries
import React, { Component } from 'react';

// third party libraries
import PropTypes from 'prop-types';
import qs from 'query-string';

// components
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import Header from '../reusables/header/Header';
import HeroSection from './HeroSection';
import HeroBlog from './HeroBlog';
import PopularArticle from './PouplarArticle';
import FilterArticle from '../reusables/article/FilterArticle';
import EditorsPick from './EditorsPick';
import RecentPosts from './RecentPost';
import Tags from './Articles/Tags';
import Footer from '../reusables/footer/Footer';

// helpers
import TokenCheck from '../../helpers/TokenCheck';

/**
 * @desc renders Landing page
 */
class LandingPage extends Component {
  checkLogin = () => {
    // eslint-disable-next-line no-restricted-globals
    const parsed = qs.parse(location.search);
    const { token } = parsed;
    if (token !== undefined) {
      const user = TokenCheck.decodeToken(token);
      this.props.homeLogin.user = user.returnedUser.user;
      this.props.homeLogin.isAuth = true;
      localStorage.setItem(
        'user',
        JSON.stringify(user.returnedUser.user)
      );
    }
  }

  render() {
    const { notifications, markNotificationAsRead } = this.props;
    this.checkLogin();
    const filterArticle = [...Array(4)].map((el, i) => (
      <FilterArticle key={i} />
    ));
    const authUser = this.props.homeLogin.user;
    const user = JSON.parse(localStorage.getItem('user'));
    return (
      <section className="index">
        <Header
          isAuth={this.props.homeLogin.isAuth }
          user={user || authUser }
          notifications={notifications}
          markNotificationAsRead={markNotificationAsRead}
          alert={this.props.location.alert}
          text={this.props.location.text}
        />
        {
          this.props.homeLogin.isAuth
            ? <HeroBlog />
            : <HeroSection />
          }
        <section className="l-ah-3">
          <PopularArticle />
        </section>
        <section className='l-ah-4'>
          <EditorsPick />
        </section>
        {/* slider carousel */}
        <section className='l-ah-5'>
          <RecentPosts />
        </section>
        <section className='l-ah-6'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <Tags />
              </div>
              <div className='col-md-12 tag-search-body'>{filterArticle}</div>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    );
  }
}

LandingPage.propTypes = {
  homeLogin: PropTypes.object,
  notifications: PropTypes.object,
  markNotificationAsRead: PropTypes.func,
  location: PropTypes.object
};

export default LandingPage;
