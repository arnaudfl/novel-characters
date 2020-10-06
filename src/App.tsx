import React from 'react';
import { HashRouter } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed,
} from '@react-firebase/auth';
import { firebaseConfig } from './config/config';

import SignIn from './components/login/SignIn';
import Dashboard from './components/Dashboard';
import WithSplashScreen from './components/splash-screen/WithSplashScreen';

const App = () => {
  const signInWithGoogle = React.useCallback(async () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(googleAuthProvider);
  }, []);
  const signInAnonymously = React.useCallback(async () => {
    await firebase.auth().signInAnonymously();
  }, []);
  const signOut = React.useCallback(async () => {
    await firebase.auth().signOut();
  }, []);

  return (
    <>
      <HashRouter>
        <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
          <IfFirebaseUnAuthed>
            {() =>
              <SignIn signInWithGoogle={signInWithGoogle} signInAnonymously={signInAnonymously} />
            }
          </IfFirebaseUnAuthed>
          <IfFirebaseAuthed>
            {() =>
              <Dashboard signOut={signOut} />
            }
          </IfFirebaseAuthed>
        </FirebaseAuthProvider>
      </HashRouter>
    </>
  );
};

export default WithSplashScreen(App);
