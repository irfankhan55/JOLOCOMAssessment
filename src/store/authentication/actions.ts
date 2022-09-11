import AsyncStorageUtils from '../../utilities/AsyncStorageUtils';
import {
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGIN_ERROR,
  LOGOUT_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_RESPONSE,
  CLEAR_APP_DATA,
  SET_USER_COUNTRY,
  SET_USER_EMAIL,
  SET_USER_STATE
} from './constants';
import { UserViewModel } from '../../models';
import { Country } from '../../components/molecules/country-picker/types' 
import { LoginAction, LogoutAction } from './types';

const setUserCountry = (country:Country) => async (dispatch: Function, getState: Function) => {
  dispatch({
    type: SET_USER_COUNTRY,
    payload: country
  });
}

const setUserEmail = (email:string) => async (dispatch: Function, getState: Function) => {
  dispatch( {
    type: SET_USER_EMAIL,
    payload: email
  });
}

const setUserState = (state:string) => async (dispatch: Function, getState: Function) => {
  dispatch({
    type: SET_USER_STATE,
    payload: state
  });
}

function loginRequestAction(): LoginAction {
  return {
    type: LOGIN_REQUEST,
    payload: ''
  };
}

function loginResponseAction(user: UserViewModel): LoginAction {
  return {
    type: LOGIN_RESPONSE,
    payload: user
  };
}

function loginErrorAction(error: string): LoginAction {
  return {
    type: LOGIN_ERROR,
    payload: error
  };
}

const login = () => async (dispatch: Function, getState: Function) => {
  dispatch(loginRequestAction());
  try {
    let user: UserViewModel = new UserViewModel();
    user.isLoggedIn = true // TODO: Login from APi
    dispatch(loginResponseAction(user));
    // await saveUserDataAndClearDataIfDiffUser(user.userInitial, dispatch);
  } catch (error) {
    dispatch(loginErrorAction(error));
  }
};

function logoutRequestAction(): LogoutAction {
  return {
    type: LOGOUT_REQUEST,
    payload: ''
  };
}

function logoutResponseAction(): LogoutAction {
  return {
    type: LOGOUT_RESPONSE,
    payload: ''
  };
}

function logoutErrorAction(error: string): LogoutAction {
  return {
    type: LOGOUT_ERROR,
    payload: error
  };
}

function clearAppDataAction() {
  return {
    type: CLEAR_APP_DATA
  };
}

const logout = () => async (dispatch: Function, getState: Function) => {
  dispatch(logoutRequestAction());
  // Logout from JOLOCOM API
  // const jolocomAPI = new JoloComAPI();
  // jolocomAPI
  //   .logout()
  //   .then(() => {
  //     dispatch(logoutResponseAction());
  //   })
  //   .catch((error) => {
  //     dispatch(logoutErrorAction(error));
  //   });
};

export { login, logout, loginErrorAction, clearAppDataAction, setUserCountry, setUserEmail, setUserState };
