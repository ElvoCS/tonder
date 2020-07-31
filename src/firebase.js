import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAoQMGrya33dcvTwtmvCpKg8EOHCAUv0KA",
  authDomain: "tonder-b3e70.firebaseapp.com",
  databaseURL: "https://tonder-b3e70.firebaseio.com",
  projectId: "tonder-b3e70",
  storageBucket: "tonder-b3e70.appspot.com",
  messagingSenderId: "289025282571",
  appId: "1:289025282571:web:18a733b828b7aabc57ad0e",
  measurementId: "G-5DVVJTBQHV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
