//.third party libraries
import http from "axios";

// modules import
import {
  FETCH_SINGLE_ARTICLE_FAILURE,
  FETCH_SINGLE_ARTICLE_SUCCESS,
  FETCH_SINGLE_ARTICLE_REQUEST
} from "../../../actionTypes/article";

const fetchSingleArticle = slug => dispatch => {
  const url = process.env.SERVER_URL || '';
  dispatch({
    type: FETCH_SINGLE_ARTICLE_REQUEST
  });
  return http
    .get(`${url}/api/v1/articles/${slug}`)
    .then(response => {
      dispatch(fetchArticleSuccess(response.data));
    })
    .catch(err => {
      dispatch(fetchArticleFailure(err.response.data.message));
    });
};

const fetchArticleSuccess = articleData => {
  return {
    type: FETCH_SINGLE_ARTICLE_SUCCESS,
    payload: articleData
  };
};

const fetchArticleFailure = errorMessage => {
  return {
    type: FETCH_SINGLE_ARTICLE_FAILURE,
    payload: errorMessage
  };
};

export { fetchSingleArticle };
