# React App + Firebase Auth & Realtime Database

:bangbang: **This project is under development, so it is not yet fully finalized.**

This project built with [Create React App](https://github.com/facebook/create-react-app) allows you to add / modify / delete character sheets for novels. This application uses Firebase for authentication and database.

## :fire: Prerequisite (Environment variables)

To use this app, you need to create an `.env` file at the root of the project in which you add the app's Firebase configuration (Realtime Database). Here is an example below:

:warning: **These are dummy data, do not copy them as they are in your project.**

```#!/bin/bash
# .env

REACT_APP_FIREBASE_API_KEY=ffa6eeb0-3ba7-4091-bd0b-98011315365a
REACT_APP_FIREBASE_AUTH_DOMAIN=auth-domain.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL=https://database-url.firebaseio.com
REACT_APP_FIREBASE_PROJECT_ID=project-id-name
REACT_APP_FIREBASE_STORAGE_BUCKET=storage-bucket.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=497108424
REACT_APP_FIREBASE_APP_ID=9:497108424:web:96ba329da5b0
```

## :bulb: Documentation

You can find an `.env_example` file, and the database schema in the `db/db.json` file, inside the `documentation/` directory at the root of the project.

## :pushpin: Resources: Frameworks & libraries

* React
* Typescript
* Material UI
* Firebase Realtime Database
* React Router
* React i18next (translations)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
