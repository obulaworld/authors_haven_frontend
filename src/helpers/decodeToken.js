import jwt from 'jwt-decode';


const decodeToken = (token) => {
  let decodedToken = jwt(token);
  return decodedToken
}

export  default decodeToken;