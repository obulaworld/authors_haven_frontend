// Third party modules
import http from 'axios';

// Import action types
import {
  PUBLISH_ARTICLE_FAILURE,
  PUBLISH_ARTICLE_SUCCESS,
  PUBLISH_ARTICLE_REQUEST

} from '../../actionTypes/article';


const publishArticleRequest = payload => ({
  type: PUBLISH_ARTICLE_REQUEST,
  payload
});
const publishArticleError = error => ({
  type: PUBLISH_ARTICLE_FAILURE,
  payload: error
});
const publishArticleSuccess = payload => ({
  type: PUBLISH_ARTICLE_SUCCESS,
  payload
});

/**
 * @returns { object } data
 * @param {object} articleRequestObject
 */
const createNewArticle = articleRequestObject => (dispatch) => {
  dispatch(publishArticleRequest(articleRequestObject));
  const verificationToken = localStorage.getItem('authorsHavenAuthToken');
  const options = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${verificationToken}`
    }
  };
  const collectedtags = articleRequestObject.get('tags')
  return http.post(
    `${process.env.SERVER_URL}/api/v1/tagsbyId`,
    {
      collectedtags,
    },
    options
  ).then((tagIds) => {
    const tags = tagIds.data.data;
    articleRequestObject.append('tags',tags);
    return http.post(
      `${process.env.SERVER_URL}/api/v1/articles`,
      articleRequestObject,
      options
    )
      .then((response) => {
        dispatch(publishArticleSuccess(response.data.createdArticle));
        return true;
      })
      .catch((error) => {
        dispatch(publishArticleError(error.response.data));
        return false;
      });
  });
};
export default createNewArticle;
