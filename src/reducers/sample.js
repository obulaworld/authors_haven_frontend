// modular importation
import initialState from '../store/initialState';
import * as types from "../actionTypes/sample";

  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case types.SAMPLE_LOGIN_SUCCESS:
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  };
  export default reducer;
  