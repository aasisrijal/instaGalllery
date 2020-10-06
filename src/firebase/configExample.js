import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

//firebase configuration from firebase console
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

const projStorage = firebase.storage();
const projFirestore = firebase.firestore();

export { projFirestore, projStorage };
