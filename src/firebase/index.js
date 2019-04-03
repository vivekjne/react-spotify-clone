import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAnrQYbQ1FRTdJ6_j_HTkAjmrDxzG5OvWI",
  authDomain: "fir-test-242c1.firebaseapp.com",
  databaseURL: "https://fir-test-242c1.firebaseio.com",
  projectId: "fir-test-242c1",
  storageBucket: "fir-test-242c1.appspot.com",
  messagingSenderId: "556463518433"
};

firebase.initializeApp(config);

const storage = firebase.storage();
const auth = firebase.auth();

export { storage, auth, firebase as default };
