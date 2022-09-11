import {
UserViewModel
} from '../models';

export interface StoreState {
  loginReducer: LoginState;
  languageReducer: LanguageState;
}

export interface LoginState {
  refreshingToken: boolean;
  refreshTokenError: string;
  loginInProcess: boolean;
  loginError: string;
  logoutProcess: boolean;
  logoutError: string;
  user: UserViewModel;
}

export interface LanguageState {
    name: string,
    value: string
}

export const initialState: StoreState = {
  loginReducer: {
    refreshingToken: false,
    refreshTokenError: null,
    loginInProcess: false,
    loginError: null,
    logoutProcess: false,
    logoutError: null,
    user: null
  },
  languageReducer : { name: 'English (UK)', value: 'en' }
};
