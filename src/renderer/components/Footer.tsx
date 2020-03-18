import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { RootState } from '../../root-reducers';
import { FooterAction, decrement, increment, reset } from '../actions/footerActions';

require('./Footer.scss');

export interface Props {
  value: number;
  incrementValue: () => Action;
  decrementValue: () => Action;
  resetValue: () => Action;
}

const Footer: React.FunctionComponent<Props> = ({ value, incrementValue, decrementValue, resetValue }: Props) => (
  <div className="footer">
    <p id="footer-value">Current value: {value}</p>
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
  value: state.footer.value
});

const mapDispatchToProps = (dispatch: Dispatch<FooterAction>) => ({
  incrementValue: () => dispatch(increment()),
  decrementValue: () => dispatch(decrement()),
  resetValue: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
