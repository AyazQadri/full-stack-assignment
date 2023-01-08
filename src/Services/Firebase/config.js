import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDYLH52JaEM5pUp1zuuVOp6Of9QSlDK61A",
  authDomain: "fullstack-assignment-5915f.firebaseapp.com",
  projectId: "fullstack-assignment-5915f",
  storageBucket: "fullstack-assignment-5915f.appspot.com",
  messagingSenderId: "735775792900",
  appId: "1:735775792900:web:8b69b9e7cecd6749fcba51",
  measurementId: "G-4G0LDR6L72"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
// const storage = getStorage(app)

export { auth, db, provider };