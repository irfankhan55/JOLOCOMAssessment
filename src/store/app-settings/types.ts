import {
  SET_LANGUAGE_ACTION
} from './constants';

export interface SetLanguageAction {
  type: typeof SET_LANGUAGE_ACTION
  payload: { name: string, value: string };
}

export type LanguageActionTypes = SetLanguageAction
