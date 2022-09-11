import { createSelector } from 'reselect';
import { StoreState, LanguageState } from '../storeState';

const languageSelector = (state: StoreState) => state.languageReducer;

export const languageName = createSelector(
  languageSelector,
  (state: LanguageState) => state.name
);

export const languageCode = createSelector(
  languageSelector,
  (state: LanguageState) => state.value
);