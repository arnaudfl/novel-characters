import React from 'react';
import { HashRouter } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed,
} from '@react-firebase/auth';
import { config } from './config/config';

import SignIn from './components/login/SignIn';
import Dashboard from './components/Dashboard';

function App() {
  const signInWithGoogle = React.useCallback(() => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  }, []);
  const signInAnonymously = React.useCallback(() => {
    firebase.auth().signInAnonymously();
  }, []);
  const signOut = React.useCallback(() => {
    firebase.auth().signOut();
  }, []);
  return (
    <>
      <HashRouter>
        <FirebaseAuthProvider {...config} firebase={firebase}>
          <IfFirebaseUnAuthed>
            {() => {
              return <SignIn signInWithGoogle={signInWithGoogle} signInAnonymously={signInAnonymously} />
            }}
          </IfFirebaseUnAuthed>
          <IfFirebaseAuthed>
            {() => {
              return <Dashboard signOut={signOut} />;
            }}
          </IfFirebaseAuthed>
        </FirebaseAuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
