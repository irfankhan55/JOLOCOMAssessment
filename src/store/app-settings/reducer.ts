import {
  SET_LANGUAGE_ACTION,
} from './constants';
import { initialState } from '../../store/storeState';
import { LanguageActionTypes } from './types';

const selectLanguageReducer = (
  state = initialState.languageReducer,
  action: LanguageActionTypes

) => {
  switch (action.type) {
    case SET_LANGUAGE_ACTION:
      return {
        ...state,
        name: action.payload.name,
        value: action.payload.value,
      };

      

    default:
      return state;
  }
};
export default selectLanguageReducer;
