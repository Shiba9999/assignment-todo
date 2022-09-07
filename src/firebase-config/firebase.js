// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCbkXFg13QgxwoCTpvEvRYrUV2GnvgOp5E",
  authDomain: "todo-f6948.firebaseapp.com",
  projectId: "todo-f6948",
  storageBucket: "todo-f6948.appspot.com",
  messagingSenderId: "601200013732",
  appId: "1:601200013732:web:6f4e7ca3e148e74f6a9131",
  measurementId: "G-KZ855E56X3"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)