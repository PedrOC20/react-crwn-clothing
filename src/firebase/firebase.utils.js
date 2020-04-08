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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot= await userRef.get();

  console.log(snapShot);

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAT = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAT,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;