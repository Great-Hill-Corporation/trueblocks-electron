import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { RootState } from '../../root-reducers';
import { FooterAction, decrement, increment, reset } from './reducers';

require('./styles.scss');

export interface FooterProps {
  footValue: number;
  incrementValue: () => Action;
  decrementValue: () => Action;
  resetValue: () => Action;
}

const FooterInner: React.FunctionComponent<FooterProps> = ({
  footValue,
  incrementValue,
  decrementValue,
  resetValue
}: FooterProps) => (
  <div className="primary">
    <p id="footer-value">Current footValue: {footValue}</p>
    <p>
      <button id="increment" onClick={incrementValue}>
        Increment
      </button>
      <button id="decrement" onClick={decrementValue}>
        Decrement
      </button>
      <button id="reset" onClick={resetValue}>
        Reset
      </button>
    </p>
  </div>
);

const mapStateToProps = (state: RootState) => ({
  footValue: state.footer.footValue
});

const mapDispatchToProps = (dispatch: Dispatch<FooterAction>) => ({
  incrementValue: () => dispatch(increment()),
  decrementValue: () => dispatch(decrement()),
  resetValue: () => dispatch(reset())
});

export const Footer = connect(mapStateToProps, mapDispatchToProps)(FooterInner);
