import { Reducer } from 'redux';
import { Action, ActionCreator } from 'redux';

//-------------------------------------------------------------------
export const INCREMENT = 'foot/INCREMENT';
export const DECREMENT = 'foot/DECREMENT';
export const RESET = 'foot/RESET';

//-------------------------------------------------------------------
export interface IncrementAction extends Action {
  type: 'foot/INCREMENT';
}
export interface DecrementAction extends Action {
  type: 'foot/DECREMENT';
}
export interface ResetAction extends Action {
  type: 'foot/RESET';
}

//-------------------------------------------------------------------
export const increment: ActionCreator<IncrementAction> = () => ({
  type: INCREMENT
});
export const decrement: ActionCreator<DecrementAction> = () => ({
  type: DECREMENT
});
export const reset: ActionCreator<ResetAction> = () => ({
  type: RESET
});

//-------------------------------------------------------------------
export type FooterAction = IncrementAction | DecrementAction | ResetAction;

//-------------------------------------------------------------------
export interface FooterState {
  readonly footValue: number;
}
const defaultState: FooterState = {
  footValue: 10
};

//-------------------------------------------------------------------
export const footerReducer: Reducer<FooterState> = (state = defaultState, action: FooterAction) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        footValue: state.footValue + 1
      };
    case DECREMENT:
      return {
        ...state,
        footValue: state.footValue - 1
      };
    case RESET:
      return {
        ...state,
        footValue: defaultState.footValue
      };
    default:
      return state;
  }
};
