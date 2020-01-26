import { hot } from 'react-hot-loader/root';
import { makeStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer';

const myStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  wholePage: {
    marginTop: '4em',
  },
  card: {
    border: '1px dashed darkblue',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Application = (): JSX.Element => <WholePage />;

const WholePage = (): JSX.Element => {
  return (
    <Fragment>
      <AppBar color="primary">
        <Typography variant="h5">TrueBlocks Account Manager</Typography>
        <Typography variant="subtitle2">Community Driven Insight</Typography>
      </AppBar>
      <InnerPage />
      <Footer />
    </Fragment>
  );
};

export default hot(Application);

const MyCard = (): JSX.Element => {
  const classes = myStyles();
  return (
    <Card className={classes.card} raised={true}>
      <CardHeader title="Monitors" subheader="Last updated: 1 minute" />
      <CardContent>This explains the monitors</CardContent>
    </Card>
  );
};

const InnerPage = (): JSX.Element => {
  //  const classes = myStyles();
  return (
    <div style={{ display: 'grid', marginTop: '4em' }}>
      <MyCard />
    </div>
  );
};
