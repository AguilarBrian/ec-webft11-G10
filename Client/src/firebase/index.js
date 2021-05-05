import firebase from "firebase/app";
import "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyA8LmjQNKly_tFMj7ur5DdmVjjMenr-vvA",
    authDomain: "react-auth-punch-it.firebaseapp.com",
    projectId: "react-auth-punch-it",
    storageBucket: "react-auth-punch-it.appspot.com",
    messagingSenderId: "843260116172",
    appId: "1:843260116172:web:a5763e03a858c0fa8ad669"
  };


firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
