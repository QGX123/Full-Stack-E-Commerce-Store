import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEwsQ4ZRlmaSahn2Xk6ThKW77eGmoSifY",
  authDomain: "full-stack-e-commerce-store.firebaseapp.com",
  projectId: "full-stack-e-commerce-store",
  storageBucket: "full-stack-e-commerce-store.appspot.com",
  messagingSenderId: "437741596540",
  appId: "1:437741596540:web:1027f9e4a717c16a59bef9",
  measurementId: "G-LGCRPDHEP3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };