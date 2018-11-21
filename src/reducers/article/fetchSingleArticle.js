// modules
import initialState from '../../store/initialState';
import {
  FETCH_SINGLE_ARTICLE_REQUEST,
  FETCH_SINGLE_ARTICLE_SUCCESS,
  FETCH_SINGLE_ARTICLE_FAILURE
} from '../../actionTypes/article';

export const fetchSingleArticleReducer = ( state = initialState.publishedArticle, action ) => {
  switch(action.type) {
    case FETCH_SINGLE_ARTICLE_REQUEST:
    
      return {
        ...state,
        processing: true
      }
    case FETCH_SINGLE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
        processing: false
      }
    case FETCH_SINGLE_ARTICLE_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default fetchSingleArticleReducer;
