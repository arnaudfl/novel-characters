import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
  IfFirebaseUnAuthed,
} from '@react-firebase/auth';
import { config } from './config/config';

import Dashboard from './components/Dashboard';

function App() {
  const test = false;
  return (
    <>
      <HashRouter>
        <FirebaseAuthProvider {...config} firebase={firebase}>
          <div>
            <IfFirebaseUnAuthed>
              {() => {
                return (
                  <>
                    <button
                      onClick={() => {
                        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                        firebase.auth().signInWithPopup(googleAuthProvider);
                      }}
                    >
                      Sign In with Google
                    </button>
                    <button
                      data-testid="signin-anon"
                      onClick={() => {
                        firebase.auth().signInAnonymously();
                      }}
                    >
                      Sign In Anonymously
                    </button>
                  </>
                )
              }}
            </IfFirebaseUnAuthed>
            <div>
              <IfFirebaseAuthed>
                {() => {
                  return <Dashboard />;
                }}
              </IfFirebaseAuthed>
            </div>
          </div>
        </FirebaseAuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
