// third party libraries
import http from 'axios';

// actions
import {
  VERIFY_EMAIL,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILURE,
} from '../../actionTypes/signup';


const verifyEmailSuccessAction = res => ({
  type: VERIFY_EMAIL_SUCCESS,
  payload: res.data.user
});

const verifyEmailErorAction = error => ({
  type: VERIFY_EMAIL_FAILURE,
  payload: error
});

/**
 * @description action to dispatch for signup with email
 * @param {string} token
 * @return {object} action
*/
const verifyUser = token => (dispatch) => {
  dispatch({
    type: VERIFY_EMAIL,
  });
  const url = process.env.SERVER_URL;
  const request = http.get(`${url}/api/v1/users?token=${token}`);
  return request.then(res => dispatch(verifyEmailSuccessAction(res)))
    .catch(({ response }) => dispatch(verifyEmailErorAction(response.data)));
};

export default verifyUser;
