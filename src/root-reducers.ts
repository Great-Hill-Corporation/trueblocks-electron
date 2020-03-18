import { combineReducers } from 'redux';

import { headerReducer } from './components';
import { footerReducer } from './components';
import { HeaderState } from './components/Header/reducers';
import { FooterState } from './components/Footer/reducers';

export interface RootState {
  footer: FooterState;
  header: HeaderState;
}

export const rootReducer = combineReducers<RootState | undefined>({
  footer: footerReducer,
  header: headerReducer
});
