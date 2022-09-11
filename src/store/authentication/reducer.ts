import {
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGIN_ERROR,
  LOGOUT_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_RESPONSE,
  SET_USER_COUNTRY,
  SET_USER_EMAIL,
  SET_USER_STATE
} from './constants';
import { initialState } from '../storeState';
import { AuthenticationActionTypes } from './types';

const loginReducer = (
  state = initialState.loginReducer,
  action: AuthenticationActionTypes
) => {
  switch (action.type) {
    case SET_USER_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          userEmail: action.payload
        }
      };
    case SET_USER_COUNTRY:
      return {
        ...state,
        user: {
          ...state.user,
          country: action.payload
        }
      };
    case SET_USER_STATE:
      return {
        ...state,
        user: {
          ...state.user,
          state: action.payload
        }
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        loginInProcess: true,
        loginError: ''
      };

    case LOGIN_RESPONSE:
      return {
        ...state,
        loginError: '',
        loginInProcess: false,
        user: action.payload
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loginInProcess: false,
        loginError: action.payload
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        logoutProcess: true,
        logoutError: ''
      };

    case LOGOUT_RESPONSE:
      return {
        ...state,
        logoutError: '',
        logoutProcess: false,
        user: null
      };

    case LOGOUT_ERROR:
      return {
        ...state,
        logoutProcess: false,
        logoutError: action.payload
      };

    default:
      return state;
  }
};

export default loginReducer;
