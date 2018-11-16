// react libraries
import React, { Component } from 'react';

// third-party libraries
import ReactHtmlParser from 'react-html-parser';
import propTypes from 'prop-types';
import Loader from 'react-loader';


// modules
import Header from '../../reusables/header/Header';
import Reaction from '../../reusables/reaction/Reaction';
import UserDetail from '../../reusables/userDetail/UserDetail';
import Share from '../../reusables/share/Share';
import Footer from '../../reusables/footer/Footer';
import UserAbout from '../../reusables/userAbout/UserAbout';
import Comment from '../../reusables/comment/Comment';

/**
 * @export
 * @class Detail
 * @extends {Component}
 * @param {object} event
 */
class ViewArticle extends Component {
  state = {
    showEditor: false,
  }

  componentDidMount = () => {
      document.body.addEventListener('click', this.myDefaultHandler);
      const articleSlug = this.props.match.params.slug;
      this.props.fetchSingleArticle(articleSlug);
  }

  componentWillUnmount = () => {
      document.body.removeEventListener('click', this.myDefaultHandler);
  }

  myDefaultHandler = (event) => {
    if (event.target.className !== 'editable') {
      this.setState({
        showEditor: false
      });
    }
  }

  handleShowEditor = () => {
    const {
      showEditor
    } = this.state;

    this.setState({
      showEditor: !showEditor
    });
  }

  render() {
    const {
      title,
      imageUrl,
      body
    } = this.props.publishedArticle.Articles;
    const shareUrl = `https://lotus-ah-staging.herokuapp.com/api/v1${this.props.location.pathname}`;
    const user = JSON.parse(localStorage.getItem('user'));
    const authUser = this.props.loginUser.user;

    return (
      <div className="detail">
        <Header 
          isAuth={authUser }
          user={user || authUser }
        />
        {this.props.loading
          ? (<div className="">
                <Loader color="#0FC86F" speed={1}className="spinner"/>
            </div>)
          : (<div>

            <div className="l-ah-view-article">
              <UserDetail />
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="col-md-10">
                      <div className="l-ah-detail-title">
                        <p>{title}</p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="l-ah-detail-featured-image">
                        <img className="img-fluid" src={ imageUrl } alt="heroblog image"/>
                      </div>
                    </div>
                    <div className="col-md-10 offset-md-1">
                      <Share shareUrl={shareUrl} title={title} />
                      <div className="l-ah-article-body">
                        <div>{ ReactHtmlParser(body) }</div>
                      </div>
                    </div>
                    <Reaction />
                  </div>
                </div>
              </div>
            </div>
            <div className="l-ah-user-about-wrap">
              <UserAbout />
            </div>
            <Comment showEditor={ this.state.showEditor } onClick={ this.handleShowEditor }/>
          </div>)}
        <Footer />
      </div>
    )
  }
}

ViewArticle.propTypes = {
  title: propTypes.string,
  body: propTypes.string,
  imageUrl: propTypes.string,
  shareUrl: propTypes.string,
};

export default ViewArticle;
