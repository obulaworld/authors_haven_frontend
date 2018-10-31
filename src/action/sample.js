// Moduler Importations
import * as types from "../actionTypes/sample";

export const setPlayerScore = score => {
    return {
      type: types.SAMPLE_LOGIN_SUCCESS,
      score: score
    };
  };
  