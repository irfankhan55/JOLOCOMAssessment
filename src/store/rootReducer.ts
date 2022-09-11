// Imports: Dependencies
import { combineReducers } from 'redux';
import { initialState, StoreState } from './storeState';
// Imports: Reducers
import loginReducer from './authentication/reducer';
import selectLanguageReducer from './app-settings/reducer';
import { CLEAR_APP_DATA } from './authentication/constants';

// Redux: Root Reducer
const appReducer = combineReducers({
  loginReducer: loginReducer,
  languageReducer: selectLanguageReducer,
});

const rootReducer = (state: StoreState, action: any) => {
  if (action.type === CLEAR_APP_DATA) {
    return appReducer(initialState, action);
  }
  return appReducer(state, action);
};

// Exports
export default rootReducer;
