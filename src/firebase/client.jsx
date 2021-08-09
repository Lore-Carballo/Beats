import firebase from "firebase/app";
import "@firebase/firestore";

const firebaseConfig = firebase.initializeApp ({
  apiKey: "AIzaSyAu9g4rMbNsLCbMAEZWYUqYrwOjNfLwfxw",
  authDomain: "proyecto-coder-fea57.firebaseapp.com",
  projectId: "proyecto-coder-fea57",
  storageBucket: "proyecto-coder-fea57.appspot.com",
  messagingSenderId: "779526778738",
  appId: "1:779526778738:web:aeefaa5c19be13424f37eb"
});

export const getFirebase = () => {
  return firebaseConfig
}

export const getFirestore = () => {
  return firebase.firestore(firebaseConfig);
}

