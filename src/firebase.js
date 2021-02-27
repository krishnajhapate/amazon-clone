import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
//   Paste your credentials here from firebase
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
