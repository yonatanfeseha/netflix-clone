import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAKi8NQpxhtY5kIchiOKwwFoJAozT5XGDE",
  authDomain: "netflix-clone-7a003.firebaseapp.com",
  projectId: "netflix-clone-7a003",
  storageBucket: "netflix-clone-7a003.firebasestorage.app",
  messagingSenderId: "84201931815",
  appId: "1:84201931815:web:3d235f1e329c4b81abba02",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.code.split("/")[1].replaceAll("-", " "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    toast.error(err.code.split("/")[1].replaceAll("-", " "));
  }
};

const logout = () => {
  signOut(auth);
};
export { auth, db, login, signup, logout };
