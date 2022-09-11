import {
  SET_USER_COUNTRY,
  SET_USER_EMAIL,
  SET_USER_STATE,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGIN_ERROR,
  LOGOUT_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_RESPONSE
} from './constants';

import { UserViewModel } from '../../models';
import { Country } from '../../components/molecules/country-picker/types';

export interface UserSetupAction {
  type: typeof SET_USER_COUNTRY | typeof SET_USER_EMAIL | typeof SET_USER_STATE;
  payload: String | Country;
}

export interface LoginAction {
  type: typeof LOGIN_REQUEST | typeof LOGIN_RESPONSE | typeof LOGIN_ERROR;
  payload: string | UserViewModel;
}

export interface LogoutAction {
  type: typeof LOGOUT_REQUEST | typeof LOGOUT_RESPONSE | typeof LOGOUT_ERROR;
  payload: string;
}

export type AuthenticationActionTypes = LoginAction | LogoutAction | UserSetupAction;
