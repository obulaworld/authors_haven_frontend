// third-party libraries
import { connect } from 'react-redux';

// components
import CreateArticlePage from '../../components/article/CreateArticlePage';

// actions
import createNewArticle from '../../action/article/createNewArticle';

const mapStateToProps = (state = {}) => ({
  publishedArticle: state.createArticle
});

export default connect(mapStateToProps, { createNewArticle })(CreateArticlePage);
