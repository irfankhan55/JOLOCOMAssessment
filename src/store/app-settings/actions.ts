import {
SET_LANGUAGE_ACTION
} from './constants';
import { SetLanguageAction } from './types';
import Strings from '../../res/i18n';

function setLanguageAction(item :{name:string, value:string}): SetLanguageAction {
  return {
    type: SET_LANGUAGE_ACTION,
    payload: item
  };
}

const setLanguage = (selectedLanguage:{name:string, value:string}) => async (dispatch: Function, getState: Function) => {
  Strings.setLanguage(selectedLanguage.value);
  dispatch(setLanguageAction(selectedLanguage));
};

export { setLanguage };
