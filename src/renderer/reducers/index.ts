import { combineReducers } from 'redux';

import { FooterState, footerReducer } from './footerReducer';

export interface RootState {
  footer: FooterState;
}

export const rootReducer = combineReducers<RootState | undefined>({
  footer: footerReducer,
});
