// third-party libraries
import { connect } from 'react-redux';

// components
import ViewArticle from '../../components/article/viewArticle/ViewArticlePage';

// actions
import { fetchSingleArticle } from '../../action/article/viewArticle/fetchSingleArticle';

const mapStateToProps = (state = {}) => ({
  publishedArticle: state.fetchSingleArticleReducer.article,
  loading: state.fetchSingleArticleReducer.processing,
  loginUser: state.auth
});
const mapDispatchToProps = dispatch => ({
  fetchSingleArticle: slug => dispatch(fetchSingleArticle(slug))
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewArticle);
