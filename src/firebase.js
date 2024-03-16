import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDn80PLDWxwTJbn7ix2I-BAddc02qeDtJ8",
  authDomain: "netflixweb-3dcfd.firebaseapp.com",
  projectId: "netflixweb-3dcfd",
  storageBucket: "netflixweb-3dcfd.appspot.com",
  messagingSenderId: "466763268824",
  appId: "1:466763268824:web:70f9781309bcc01cdb4dad",
  measurementId: "G-C288MDNXMZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
