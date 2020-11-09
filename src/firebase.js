import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCee-FoRFBh2e4zq3qDuoDFk43WgzHorak",
    authDomain: "clone-fc624.firebaseapp.com",
    databaseURL: "https://clone-fc624.firebaseio.com",
    projectId: "clone-fc624",
    storageBucket: "clone-fc624.appspot.com",
    messagingSenderId: "1034905867724",
    appId: "1:1034905867724:web:626a54bbc3b8ef783a7969",
    measurementId: "G-5SN9BCF85M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };