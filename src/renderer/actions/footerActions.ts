import { Action, ActionCreator } from 'redux';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface IncrementAction extends Action {
  type: 'INCREMENT';
}
export const increment: ActionCreator<IncrementAction> = () => ({
  type: INCREMENT,
});

export interface DecrementAction extends Action {
  type: 'DECREMENT';
}
export const decrement: ActionCreator<DecrementAction> = () => ({
  type: DECREMENT,
});

export interface ResetAction extends Action {
  type: 'RESET';
}
export const reset: ActionCreator<ResetAction> = () => ({
  type: RESET,
});

export type FooterAction = IncrementAction | DecrementAction | ResetAction;
