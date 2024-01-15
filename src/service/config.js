import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYUG4qLsBuOjzEC9bYWqQHE-wVITXF3t8",
  authDomain: "proyecto-rc-crp.firebaseapp.com",
  projectId: "proyecto-rc-crp",
  storageBucket: "proyecto-rc-crp.appspot.com",
  messagingSenderId: "265935308909",
  appId: "1:265935308909:web:6c0f125528cc7b47819764"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);
