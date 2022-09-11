import { createSelector } from 'reselect';
import { UserViewModel } from '../../models';
import { StoreState, LoginState } from '../storeState';

const loginSelector = (state: StoreState) => state.loginReducer;

export const loginError = createSelector(
  loginSelector,
  (state: LoginState) => state.loginError
);

export const isLoginInProcess = createSelector(
  loginSelector,
  (state: LoginState) => state.loginInProcess
);

export const loggedInUser = createSelector(
  loginSelector,
  (state: LoginState) => state.user
);
