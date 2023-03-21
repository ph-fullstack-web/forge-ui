import {createContext} from 'react';

import {Employee, GoogleUser, User} from 'models/core';

export interface AuthContextProps {
  token: string | undefined;
  isLoggedIn: boolean;
  googleUser: GoogleUser | undefined;
  userDetails: User | undefined;
  employeeDetails: Employee | undefined;
  userId: string;
  sessionTimeout: number;
  login: (token: string, successLogin: () => void) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);
