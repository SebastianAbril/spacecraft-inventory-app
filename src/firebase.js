import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBsUCSqmOE7xzG0qo0KlQCwD_5C9TY8NeI",
  authDomain: "fb-crud-react-9aca4.firebaseapp.com",
  projectId: "fb-crud-react-9aca4",
  storageBucket: "fb-crud-react-9aca4.appspot.com",
  messagingSenderId: "108526327957",
  appId: "1:108526327957:web:4a045ccd293e5e2aa5e39c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();
