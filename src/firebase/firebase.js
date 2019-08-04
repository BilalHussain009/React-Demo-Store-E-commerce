import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyApIXLxw-VBsWzxZyiD6rnuYqoJ2N9cTIY",
  authDomain: "expensify-bilal-app.firebaseapp.com",
  databaseURL: "https://expensify-bilal-app.firebaseio.com",
  projectId: "expensify-bilal-app",
  storageBucket: "expensify-bilal-app.appspot.com",
  messagingSenderId: "627291763869",
  appId: "1:627291763869:web:b40f40447c47e625"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

