import * as firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyD6y_ErKV1DKFbttN5C93yO18jJDTGUbaQ",
	authDomain: "fir-auth-64f42.firebaseapp.com",
	databaseURL: "https://fir-auth-64f42.firebaseio.com",
	projectId: "fir-auth-64f42",
	storageBucket: "fir-auth-64f42.appspot.com",
	messagingSenderId: "336668668128",
	appId: "1:336668668128:web:06edd81a85cea94976a085",
};

console.log(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const database = firebase.database();

export { firebase, googleAuthProvider, database };
