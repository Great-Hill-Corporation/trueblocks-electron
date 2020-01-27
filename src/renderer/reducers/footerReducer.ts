import { Reducer } from 'redux';

import { DECREMENT, INCREMENT, RESET, FooterAction } from '../actions/footerActions';

export interface FooterState {
  readonly value: number;
}

const defaultState: FooterState = {
  value: 10
};

export const footerReducer: Reducer<FooterState> = (state = defaultState, action: FooterAction) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      };
    case RESET:
      return {
        ...state,
        value: defaultState.value
      };
    default:
      return state;
  }
};
