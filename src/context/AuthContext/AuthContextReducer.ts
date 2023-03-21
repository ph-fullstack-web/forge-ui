import {Employee, GoogleUser, User} from 'models/core';

export type AuthContextState = {
  isAuthDataLoading: boolean;
  isUserDataLoading: boolean;
  authToken: string;
  authGoogleUser: GoogleUser | undefined;
  authUser: User | undefined;
  authEmployee: Employee | undefined;
  authCookie: string;
  authCookieExpiration: number;
};

export type AuthContextActionPayload = {
  authToken?: string;
  authGoogleUser?: GoogleUser;
  authUser?: User;
  authEmployee?: Employee;
  authCookie?: string;
  authCookieExpiration?: number;
};

export enum AuthContextActionTypes {
  SetAuthGoogleUser,
  SetAuthUser,
  ClearAuthData,
  SetAuthDataLoadingOnGoing,
  SetAuthDataLoadingComplete,
  SetUserDataLoadingOnGoing,
  SetUserDataLoadingComplete,
}

export type AuthContextAction = {
  type: AuthContextActionTypes;
  payload: AuthContextActionPayload;
};

export const initialAuthState: AuthContextState = {
  isAuthDataLoading: true,
  isUserDataLoading: true,
  authToken: '',
  authGoogleUser: undefined,
  authUser: undefined,
  authEmployee: undefined,
  authCookie: '',
  authCookieExpiration: 0,
};

export const authContextReducer = (
  state: AuthContextState,
  action: AuthContextAction
): AuthContextState => {
  switch (action.type) {
    case AuthContextActionTypes.SetAuthGoogleUser: {
      return {
        ...state,
        authGoogleUser: action.payload.authGoogleUser,
        authToken: action.payload.authToken ?? '',
        authCookieExpiration: action.payload.authCookieExpiration ?? 0,
        isAuthDataLoading: false,
      };
    }

    case AuthContextActionTypes.SetAuthUser: {
      return {
        ...state,
        authUser: action.payload.authUser,
        authEmployee: action.payload.authEmployee,
        isUserDataLoading: false,
      };
    }

    case AuthContextActionTypes.ClearAuthData: {
      return {
        ...state,
        authGoogleUser: undefined,
        authUser: undefined,
        authEmployee: undefined,
        authToken: '',
        authCookieExpiration: 0,
      };
    }

    case AuthContextActionTypes.SetAuthDataLoadingOnGoing: {
      return {
        ...state,
        isAuthDataLoading: true,
      };
    }

    case AuthContextActionTypes.SetAuthDataLoadingComplete: {
      return {
        ...state,
        isAuthDataLoading: false,
      };
    }

    case AuthContextActionTypes.SetUserDataLoadingOnGoing: {
      return {
        ...state,
        isUserDataLoading: true,
      };
    }

    case AuthContextActionTypes.SetUserDataLoadingComplete: {
      return {
        ...state,
        isUserDataLoading: false,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
