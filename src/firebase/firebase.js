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
database.ref('Items/1').set({
	name:"A10",
	price:2500,
	company:"Huwawai"
});
database.ref('Items/2').set({
	name:"J7",
	price:2500,
	company:"Samsung"
});
database.ref('Items/3').set({
	name:"Galaxy s10",
	price:2500,
	company:"Samsung"
});
database.ref('Items/4').set({
	name:"Abc",
	price:2500,
	company:"Q-Mobile"
});
database.ref('Items/5').set({
	name:"S5",
	price:2500,
	company:"Huwawai"
});
database.ref('Items/6').set({
	name:"A10",
	price:2500,
	company:"Huwawai"
});
database.ref('Items/7').set({
	name:"A10",
	price:2500,
	company:"Huwawai"
});

