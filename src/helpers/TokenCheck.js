// third-party libraries
import jwt from 'jsonwebtoken';


const auth = {

  /**
  * @static
  * @param {string} token
  * @description Verifies user token
  * @return {object} object
  */
  verifyToken(token) {
    let decoded = {};
    try {
      decoded = jwt.verify(token, process.env.SECRET);
    } catch (error) {
      decoded = {
        error: error.message,
      };
    }
    return decoded;
  },

  /**
  * @static
  * @param {object} request
  * @param {object} response
  * @param {function} next
  * @description Verifies user token
  * @return {object} object
  */
  verifyUserToken(token) {
    if (!token) {
      return false;
    }
    
    const decoded = auth.verifyToken(token);
    if (decoded.error) {
      return false;
    }
    return true;
  }
};

export default auth;
