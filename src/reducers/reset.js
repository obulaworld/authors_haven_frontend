import initialState from '../store/initialState';

// modular importation
import {
  FORGOT_PASSWORD,
  RESET_PASSWORD
} from '../actionTypes/reset';

/**
 * @returns {object} param
 * @param {object} state
 * @param {string} action
 * @desc sample of a reducer
 */
const reducer = (state = initialState.reset, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD:
      return {
        ...state,
        response: action.payload
      };
    case RESET_PASSWORD:
      return {
        ...state,
        response: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
