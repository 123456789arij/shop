import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBxAGFHafKBq21Wbuj4kjrq6FpXRmQGpy8",
  authDomain: "boutique-vet.firebaseapp.com",
  databaseURL: "https://boutique-vet.firebaseio.com",
  projectId: "boutique-vet",
  storageBucket: "boutique-vet.appspot.com",
  messagingSenderId: "735538709549",
  appId: "1:735538709549:web:f318d73adc3de8562b24a4",
  measurementId: "G-G1CYQVNZGP"
};

firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;