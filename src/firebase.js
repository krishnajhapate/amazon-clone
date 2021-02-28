import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
<<<<<<< HEAD
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyDD6QTtI0yM1IRWBT0lD7NsIwCIMULw9q4",
  authDomain: "clone-231dc.firebaseapp.com",
  projectId: "clone-231dc",
  storageBucket: "clone-231dc.appspot.com",
  messagingSenderId: "1074387702582",
  appId: "1:1074387702582:web:49ec4ad8feea7fd2c15997",
  measurementId: "G-LS7XVEB86H",
=======
//   Paste your credentials here from firebase
>>>>>>> 07cf91fc354d974dfe259198050ad6cd7e6fa00d
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
