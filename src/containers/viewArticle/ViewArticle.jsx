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

const mapStateToProps = (state = initialState.publishedArticle) => ({
  publishedArticle: state.fetchSingleArticleReducer.article,
  loading: state.fetchSingleArticleReducer.processing,
  loginUser: state.auth,
  notifications: state.getNotification,
});

const mapDispatchToProps = {
  fetchSingleArticle: slug => fetchSingleArticle(slug),
  rate: (slug, data) => rateArticleRequest(slug, data),
  markNotificationAsRead: (token, id, mark) => markNotificationAsReadAction(token, id, mark)
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewArticle);
