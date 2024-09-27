import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCOjjJhGrNseVeDiQIrw79aPFREKdcbJsY",
  authDomain: "blog-d1e00.firebaseapp.com",
  projectId: "blog-d1e00",
  storageBucket: "blog-d1e00.appspot.com",
  messagingSenderId: "131318741266",
  appId: "1:131318741266:web:7ae3ef7b7007d2132c5bcb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};