// Firebase Config
import env from './env';

export const firebaseConfig = {
    apiKey: env('REACT_APP_FIREBASE_API_KEY'),
    authDomain: env('REACT_APP_FIREBASE_AUTH_DOMAIN'),
    databaseURL: env('REACT_APP_FIREBASE_DATABASE_URL'),
    projectId: env('REACT_APP_FIREBASE_PROJECT_ID'),
    // OPTIONAL
    storageBucket: env('REACT_APP_FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: env('REACT_APP_FIREBASE_MESSAGING_SENDER_ID'),
    appId: env('REACT_APP_FIREBASE_APP_ID')
};
