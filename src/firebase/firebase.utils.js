import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBjMI08RAu8rw99mvlz1V1bfbo-1vNoIdY",
  authDomain: "crwn-db-698d7.firebaseapp.com",
  databaseURL: "https://crwn-db-698d7.firebaseio.com",
  projectId: "crwn-db-698d7",
  storageBucket: "crwn-db-698d7.appspot.com",
  messagingSenderId: "723343228615",
  appId: "1:723343228615:web:8a80d0ddb8440698be48e2",
  measurementId: "G-L420JRFJTG"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;