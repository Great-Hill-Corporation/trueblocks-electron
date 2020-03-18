import { hot } from 'react-hot-loader/root';
import { makeStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
//import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
//import Button from '@material-ui/core/Button';
//import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';

import { Footer, Header2 } from './components';

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
  card: {
    border: '1px dashed darkblue',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
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

// export interface MyHeaderProps {
//   title: string;
// }

// const Header: React.FC<MyHeaderProps> = ({ title }: MyHeaderProps) => {
//   const classes = myStyles();
//   return (
//     <AppBar color="primary">
//       <Toolbar variant="dense">
//         <Grid container>
//           <Grid container item xs={11}>
//             <IconButton edge="start" color="inherit" aria-label="menu">
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h5" className={classes.title}>
//               {title}
//             </Typography>
//           </Grid>
//           <Grid item xs={1}>
//             <Button color="inherit" className={classes.login}>
//               Login
//             </Button>
//           </Grid>
//         </Grid>
//       </Toolbar>
//     </AppBar>
//   );
// };

const Application = (): JSX.Element => (
  <Fragment>
    <Header2 />
    <Body />
    <Footer />
  </Fragment>
);

export default hot(Application);

export interface MyCardProps {
  title: string;
}

const MyCard: React.FC<MyCardProps> = ({ title }: MyCardProps) => {
  const classes = myStyles();
  return (
    <Card className={classes.card} raised={true}>
      <CardHeader title={title} subheader={'Last updated: ' + Math.floor(Math.random() * 100) / 100 + ' minute'} />
      <CardContent>This explains the {title.toLowerCase()}</CardContent>
    </Card>
  );
};

const Body = (): JSX.Element => {
  //  const classes = myStyles();
  return (
    <div style={{ display: 'grid', marginTop: '4em' }}>
      <Grid container>
        <Grid item xs={3}>
          <MyCard title={'Monitors'} />
        </Grid>
        <Grid item xs={3}>
          <MyCard title={'Indicies'} />
        </Grid>
        <Grid item xs={3}>
          <MyCard title={'Explorer'} />
        </Grid>
        <Grid item xs={3}>
          <MyCard title={'Caches'} />
        </Grid>
      </Grid>
    </div>
  );
};
