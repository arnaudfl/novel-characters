import React from 'react';
import { useTranslation } from "react-i18next";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Copyright from '../layout/Copyright';
import GoogleLogo from '../../styles/images/google_logo.svg';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

interface SignInProps {
  signInWithGoogle: (event: React.MouseEvent<HTMLDivElement>) => void,
  signInAnonymously: (event: React.MouseEvent<HTMLDivElement>) => void,
}

const SignIn = ({ signInWithGoogle, signInAnonymously }: SignInProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const isSignedIn = React.useMemo(() => localStorage.getItem('isSignedIn'), []);

  return (
    <>
      {!isSignedIn &&
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  {t('signin.title')}
                </Typography>
                <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label={t('signin.label.email')}
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label={t('signin.label.password')}
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label={t('signin.label.rememberme')}
                  />
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    {t('signin.button.signin')}
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <div className="google-btn" onClick={signInWithGoogle}>
                        <div className="google-icon-wrapper">
                          <img alt="Google" className="google-icon" src={GoogleLogo} />
                        </div>
                        <p className="btn-text"><b>{t('signin.button.signinwithgoogle')}</b></p>
                      </div>
                    </Grid>
                    <Grid item>
                      <div className="google-btn" onClick={signInAnonymously}>
                        <div className="google-icon-wrapper">
                          <img alt="Google" className="google-icon" src={GoogleLogo} />
                        </div>
                        <p className="btn-text"><b>{t('signin.button.signinanon')}</b></p>
                      </div>
                    </Grid>
                  </Grid>
                  <br />
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        {t('signin.forgotpassword')}
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {t('signin.signup')}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      }
    </>
  );
}

export default SignIn;
