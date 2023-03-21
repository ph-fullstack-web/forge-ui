import jwt_decode from 'jwt-decode';

import {GoogleUser} from 'models/core';

export const getUserFromToken = (token: string): GoogleUser => {
  const decodedJwt = jwt_decode(token) as ApprovedAny;

  const user: GoogleUser = {
    email: decodedJwt.email,
    familyName: decodedJwt.family_name,
    givenName: decodedJwt.given_name,
    name: decodedJwt.name,
    pictureSource: decodedJwt.picture,
  };

  return user;
};

export const getExpirationFromToken = (token: string): number => {
  const decodedJwt = jwt_decode(token) as ApprovedAny;
  return decodedJwt.exp;
};
