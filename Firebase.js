import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const fire = firebase.initializeApp({
  apiKey: "AIzaSyAlFIbWAqqNDgHEth-duXN3Rbqzv8QYuFs",
  authDomain: "basic-student-cms.firebaseapp.com",
  projectId: "basic-student-cms",
  storageBucket: "basic-student-cms.appspot.com",
  messagingSenderId: "558210327302",
  appId: "1:558210327302:web:4968d3c42d6d089bb47487",
  measurementId: "G-BGT47M3MT2",
});
export const auth = fire.auth();
export const db = fire.firestore();
export default {
  fire,
};
