import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD5Z-CQcGNPu8l88bhrASwrUHe5DW3RUDA",
  authDomain: "evernote-clone-3a904.firebaseapp.com",
  databaseURL: "https://evernote-clone-3a904.firebaseio.com",
  projectId: "evernote-clone-3a904",
  storageBucket: "evernote-clone-3a904.appspot.com",
  messagingSenderId: "133127183261",
  appId: "1:133127183261:web:8ef5b9a4a4b86598082d74",
};

const fire = firebase.initializeApp(config);

export default fire;
