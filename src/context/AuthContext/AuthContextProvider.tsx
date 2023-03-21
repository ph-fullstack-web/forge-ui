import React, {useEffect, useReducer} from 'react';

import {useCookies} from 'react-cookie';

import {
  AuthContext,
  AuthContextActionTypes,
  initialAuthState,
  authContextReducer,
} from 'context/AuthContext';
import {User} from 'models/core';
import {CTEmployeeService} from 'services/communityTracker';
import {UserService} from 'services';

import {FetchError} from 'hooks/useFetch/types';
import {getEmployeeDetails} from './dtoHelper';
import {getExpirationFromToken, getUserFromToken} from './googleAuthHelper';

type AuthProviderProps = ComponentWithChildren;

export const AuthContextProvider = ({children}: AuthProviderProps) => {
  const ACCESS_TOKEN = 'svmp_access_token';

  const [authStore, authDispatch] = useReducer(
    authContextReducer,
    initialAuthState
  );

  const [cookies, setCookie, removeCookie] = useCookies([ACCESS_TOKEN]);

  const ctEmployeeService = new CTEmployeeService();
  const getEmployeeByEmail = ctEmployeeService.useGetEmployeeByEmail(
    authStore.authGoogleUser?.email ?? ''
  );

  const userService = new UserService();
  const getUserByEmail = userService.useGetEmployeeByEmail(
    authStore.authGoogleUser?.email ?? ''
  );

  const loginHandler = (authToken: string, successLogin: () => void) => {
    setCookie(ACCESS_TOKEN, authToken, {path: '/'});
    const authUser = getUserFromToken(authToken);
    const tokenExpiration = getExpirationFromToken(authToken);

    authDispatch({
      type: AuthContextActionTypes.SetAuthGoogleUser,
      payload: {
        authToken: authToken,
        authGoogleUser: authUser,
        authCookieExpiration: tokenExpiration,
      },
    });
    successLogin();
  };

  const logoutHandler = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    google.accounts.id.disableAutoSelect();

    removeCookie(ACCESS_TOKEN, {path: '/'});

    authDispatch({
      type: AuthContextActionTypes.ClearAuthData,
      payload: {},
    });
  };

  useEffect(() => {
    if (cookies && cookies.svmp_access_token) {
      const authToken = cookies.svmp_access_token;
      const authUser = getUserFromToken(authToken);
      const tokenExpiration = getExpirationFromToken(authToken);
      // if (tokenExpiration < new Date().getTime()) {
      //   logoutHandler();
      // } else {
      authDispatch({
        type: AuthContextActionTypes.SetAuthGoogleUser,
        payload: {
          authToken: authToken,
          authGoogleUser: authUser,
          authCookieExpiration: tokenExpiration,
        },
      });
      //}
    } else {
      authDispatch({
        type: AuthContextActionTypes.SetAuthDataLoadingComplete,
        payload: {},
      });
    }
  }, []);

  useEffect(() => {
    if (authStore.authGoogleUser && authStore.authGoogleUser.email) {
      getUserByEmail.dispatch({
        onSuccess: ({data}) => {
          if (data) {
            const authUserData: User = {
              userId: data.userId ?? '',
              email: data.email ?? '',
              status: data.status ?? 'Active',
              userRoles: data.userRoles ?? [],
            };

            getEmployeeByEmail.dispatch({
              onSuccess: ({data}) => {
                const employeeDetails = getEmployeeDetails(data.data);
                if (employeeDetails) {
                  authDispatch({
                    type: AuthContextActionTypes.SetAuthUser,
                    payload: {
                      authUser: authUserData,
                      authEmployee: employeeDetails,
                    },
                  });
                }
              },
              onFailure: ({response}: FetchError<ApprovedAny>) => {
                console.error('getEmployeeByEmail Error', response);
                authDispatch({
                  type: AuthContextActionTypes.SetUserDataLoadingComplete,
                  payload: {},
                });
              },
            });
          } else {
            console.error('User not found');
            authDispatch({
              type: AuthContextActionTypes.SetUserDataLoadingComplete,
              payload: {},
            });
          }
        },
        onFailure: ({response}: FetchError<ApprovedAny>) => {
          console.error('getUserByEmail Error', response);
          authDispatch({
            type: AuthContextActionTypes.SetUserDataLoadingComplete,
            payload: {},
          });
        },
      });
    }
  }, [authStore.authGoogleUser]);

  if (authStore.isUserDataLoading && authStore.isAuthDataLoading) {
    return <>Auth Loading...</>;
  }

  return (
    <AuthContext.Provider
      value={{
        token: authStore.authToken,
        googleUser: authStore.authGoogleUser,
        userDetails: authStore.authUser,
        employeeDetails: authStore.authEmployee,
        userId: authStore.authUser?.userId ?? '',
        isLoggedIn: !!authStore.authToken,
        sessionTimeout: authStore.authCookieExpiration ?? 0,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
