import { Action, ActionCreator } from 'redux';

export const INCREMENT = 'INCREMENT';
export interface IncrementAction extends Action {
  type: 'INCREMENT';
}
export const increment: ActionCreator<IncrementAction> = () => ({
  type: INCREMENT
});

export const DECREMENT = 'DECREMENT';
export interface DecrementAction extends Action {
  type: 'DECREMENT';
}
export const decrement: ActionCreator<DecrementAction> = () => ({
  type: DECREMENT
});

export const RESET = 'RESET';
export interface ResetAction extends Action {
  type: 'RESET';
}
export const reset: ActionCreator<ResetAction> = () => ({
  type: RESET
});

export type FooterAction = IncrementAction | DecrementAction | ResetAction;
