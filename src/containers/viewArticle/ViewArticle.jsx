// third-party libraries
import { connect } from 'react-redux';

// store
import initialState from '../../store/initialState';

// components
import ViewArticle from '../../components/article/viewArticle/ViewArticlePage';

// actions
import fetchSingleArticle from '../../action/article/viewArticle/fetchSingleArticle';
import { rateArticleRequest } from '../../action/article/rating';

const mapStateToProps = (state = initialState.publishedArticle) => ({
  publishedArticle: state.fetchSingleArticleReducer.article,
  loading: state.fetchSingleArticleReducer.processing,
  loginUser: state.auth
});

const mapDispatchToProps = dispatch => ({
  fetchSingleArticle: slug => dispatch(fetchSingleArticle(slug)),
  rate: (slug, data) => dispatch(rateArticleRequest(slug, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewArticle);
