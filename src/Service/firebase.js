import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAnOaae8l2IxpKQEuKIBDv8SsR9MA2LUiI",
  authDomain: "todo-list-6e7f9.firebaseapp.com",
  databaseURL: "https://todo-list-6e7f9-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "todo-list-6e7f9",
  storageBucket: "todo-list-6e7f9.appspot.com",
  messagingSenderId: "883003375052",
  appId: "1:883003375052:web:c8daf87301a133ad07f169"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);