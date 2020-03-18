import { Reducer } from 'redux';
import { Action, ActionCreator } from 'redux';

//-------------------------------------------------------------------
export const INCREMENT = 'head/INCREMENT';
export const DECREMENT = 'head/DECREMENT';
export const RESET = 'head/RESET';

//-------------------------------------------------------------------
export interface IncrementAction extends Action {
  type: 'head/INCREMENT';
}
export interface DecrementAction extends Action {
  type: 'head/DECREMENT';
}
export interface ResetAction extends Action {
  type: 'head/RESET';
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
export type HeaderAction = IncrementAction | DecrementAction | ResetAction;

//-------------------------------------------------------------------
export interface HeaderState {
  readonly headValue: string;
}
const defaultState: HeaderState = {
  headValue: 'Blaze Browser'
};

//-------------------------------------------------------------------
export const headerReducer: Reducer<HeaderState> = (state = defaultState, action: HeaderAction) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        headValue: 'On Fire'
      };
    case DECREMENT:
      return {
        ...state,
        headValue: 'Screaming Fast'
      };
    case RESET:
      return {
        ...state,
        headValue: 'Blaze Browser'
      };
    default:
      return state;
  }
};
