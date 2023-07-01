import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyBYFWpET5KhcaHQ8e0GnpTR67M2fMvfhAk",
  authDomain: "i-money-3ef18.firebaseapp.com",
  projectId: "i-money-3ef18",
  storageBucket: "i-money-3ef18.appspot.com",
  messagingSenderId: "120792227155",
  appId: "1:120792227155:web:a7e97adec19c25821895a6",
  measurementId: "G-0786T1WD7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const fireStoreCore = getFirestore(app);

// Auth for firebase
const auth = getAuth(app); 

const timestamp = serverTimestamp; 
export { fireStoreCore, auth, timestamp }
