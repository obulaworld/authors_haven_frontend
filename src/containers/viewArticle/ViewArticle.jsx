// third-party libraries
import { connect } from 'react-redux';

// store
import initialState from '../../store/initialState';

// components
import ViewArticle from '../../components/article/viewArticle/ViewArticlePage';

// actions
import fetchSingleArticle from '../../action/article/viewArticle/fetchSingleArticle';
import { rateArticleRequest } from '../../action/article/rating';
import markNotificationAsReadAction from '../../action/notification/readNotification';
import likeOrDislike from '../../action/article/likeOrDislike';

const mapStateToProps = (state = initialState.publishedArticle) => ({
  publishedArticle: state.fetchSingleArticleReducer.article,
  loading: state.fetchSingleArticleReducer.processing,
  loginUser: state.auth,
  notifications: state.getNotification,
  reactions: state.likeOrDislikeArticle.reactions,
});

const mapDispatchToProps = {
  fetchSingleArticle: slug => fetchSingleArticle(slug),
  rate: (slug, data) => rateArticleRequest(slug, data),
  markNotificationAsRead: (token, id, mark) => markNotificationAsReadAction(token, id, mark),
  liked: (articleId, data) => likeOrDislike(articleId, data),
};


export default connect(mapStateToProps, mapDispatchToProps)(ViewArticle);
