import { hot } from 'react-hot-loader/root';
import { makeStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer';

const myStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  wholePage: {
    marginTop: '4em'
  },
  card: {
    border: '1px dashed darkblue',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  title: {
    /*color: 'yellow',*/
    paddingTop: '9px'
  },
  login: {
    /*color: 'yellow',*/
    paddingTop: '13px',
    textAlign: 'right'
  },
  header: {
    container: { display: 'grid', gridTemplateColumns: '1fr 10fr 1fr' },
    menuButton: {},
    text: {},
    social: {}
  }
}));

const Application = (): JSX.Element => <WholePage />;

const WholePage = (): JSX.Element => {
  const classes = myStyles();
  return (
    <Fragment>
      <AppBar color="primary">
        <Toolbar variant="dense">
          <Grid container>
            <Grid container item xs={11}>
              <IconButton edge="start" className={classes.header.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" className={classes.title}>
                Blaze
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Button color="inherit" className={classes.login}>
                Login
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
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
