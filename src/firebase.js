import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyBI71udIwJpGoWEPF-1H6Cs4-LMHpa9B-8",
  authDomain: "veilletech-e1142.firebaseapp.com",
  projectId: "veilletech-e1142",
  storageBucket: "veilletech-e1142.appspot.com",
  messagingSenderId: "712257871286",
  appId: "1:712257871286:web:625314649b61eca81db517",
  measurementId: "G-SF64E6ZGRD"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
