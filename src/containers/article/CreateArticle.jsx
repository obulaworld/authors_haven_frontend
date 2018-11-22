// third-party libraries
import { connect } from 'react-redux';

// components
import CreateArticlePage from '../../components/article/CreateArticlePage';

// actions
import createNewArticle from '../../action/article/createNewArticle';
import { fetchSingleArticle } from '../../action/article/viewArticle/fetchSingleArticle';
import updateArticle  from '../../action/article/updateArticle'

// store
import initialState from '../../store/initialState';

const mapStateToProps = (state = initialState.publishedArticle) => ({
  publishedArticle: state.createArticle,
  loginUser: state.auth,
  notifications: state.getNotification,
  auth: state.auth,
  fetchedSingleArticle: state.fetchSingleArticleReducer.article,
  updateArticle: state.updateArticleReducer.article,
});

const mapDispatchToProps = dispatch => ({
  fetchSingleArticle: slug => dispatch(fetchSingleArticle(slug)),
  createNewArticle: (articleObjects, tags) => dispatch(createNewArticle(articleObjects,tags)),
  updateArticle: (articleObject, tags, slug) => dispatch(updateArticle(articleObject, tags, slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticlePage);
