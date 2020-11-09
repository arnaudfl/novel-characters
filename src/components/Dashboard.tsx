import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import MainMenu from './layout/MainMenu';
import SideMenu from './layout/SideMenu';
import CharactersList from './characters-list/CharactersList';
import Copyright from './layout/Copyright';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

interface DashboardProps {
  signOut: (event: React.MouseEvent<HTMLDivElement>) => void,
}

const Dashboard = ({ signOut }: DashboardProps) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  /* const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    let unsubscribe: () => void;
    const getUser = async () => {
      unsubscribe = await firebase.checkUserAuth(user => setUser(user));
    };
    getUser();
    return function cleanup() {
      unsubscribe();
    };
  }, []); */

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User just signed in, we should not display dialog next time because of firebase auto-login
        localStorage.setItem('isSignedIn', '1');
      } else {
        // User just signed-out or auto-login failed, we will show sign-in form immediately the next time he loads the page
        localStorage.removeItem('isSignedIn');
      }
    })
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };;

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <CssBaseline />
            <MainMenu open={open} classes={classes} handleDrawerOpen={handleDrawerOpen} />
            <SideMenu open={open} classes={classes} handleDrawerClose={handleDrawerClose} signOut={signOut} />
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container maxWidth="lg" className={classes.container}>
                <Switch>
                  <Route exact path="/">
                    <CharactersList />
                  </Route>
                  <Route path="/new">
                    New Character
                  </Route>
                </Switch>
                <Box pt={4}>
                  <Copyright />
                </Box>
              </Container>
            </main>
          </div>
        </ThemeProvider>
      </HashRouter>
    </>
  );
}

export default Dashboard;
