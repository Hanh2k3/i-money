// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);