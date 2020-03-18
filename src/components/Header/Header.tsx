import * as React from 'react';
import { Action } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../root-reducers';
import { HeaderAction, decrement, increment, reset } from './reducers';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

require('./styles.scss');

const myStyles = makeStyles(theme => ({
  title: {
    paddingTop: '9px'
  },
  login: {
    /*color: 'yellow',*/
    paddingTop: '13px',
    textAlign: 'right'
  },
  header: {
    container: { display: 'grid', gridTemplateColumns: '1fr 10fr 1fr' },
    menuButton: { color: 'white' },
    text: {},
    social: {}
  }
}));

export interface HeaderProps {
  headValue: string;
  incrementValue: () => Action;
  decrementValue: () => Action;
  resetValue: () => Action;
}

const Header2Inner: React.FC<HeaderProps> = ({
  headValue,
  incrementValue,
  decrementValue,
  resetValue
}: HeaderProps) => {
  const classes = myStyles();
  return (
    <AppBar color="primary">
      <Toolbar variant="dense">
        <Grid container>
          <Grid container item xs={10}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <button id="increment" onClick={incrementValue}>
              Increment
            </button>
            <button id="decrement" onClick={decrementValue}>
              Decrement
            </button>
            <button id="reset" onClick={resetValue}>
              Reset
            </button>
            <Typography variant="h5" className={classes.title}>
              {headValue}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button color="inherit" className={classes.login}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state: RootState) => ({
  headValue: state.header.headValue
});

const mapDispatchToProps = (dispatch: Dispatch<HeaderAction>) => ({
  incrementValue: () => dispatch(increment()),
  decrementValue: () => dispatch(decrement()),
  resetValue: () => dispatch(reset())
});

export const Header2 = connect(mapStateToProps, mapDispatchToProps)(Header2Inner);
