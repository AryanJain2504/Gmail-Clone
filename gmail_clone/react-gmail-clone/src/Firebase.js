import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyACvXWwF7EK6__1y7siYMc2pAM4D_Pj_nM",
  authDomain: "clone-583c8.firebaseapp.com",
  projectId: "clone-583c8",
  storageBucket: "clone-583c8.appspot.com",
  messagingSenderId: "982201299714",
  appId: "1:982201299714:web:7030505a9a0749fe63c81b"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};