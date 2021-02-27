import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBtAE6wWoz7bj-jSkgFJiB2gu9OJlBr1fA",
  authDomain: "challenge-695d5.firebaseapp.com",
  projectId: "challenge-695d5",
  storageBucket: "challenge-695d5.appspot.com",
  messagingSenderId: "846316400517",
  appId: "1:846316400517:web:8da3c790eae20e3aabdeec",
  measurementId: "G-VXDQE544LW",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
