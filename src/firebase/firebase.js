import * as firebase from "firebase";

const firebaseConfig = {

};

console.log(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const database = firebase.database();

export { firebase, googleAuthProvider, database };
