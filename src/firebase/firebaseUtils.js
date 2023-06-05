import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const firebase = {
  signInWithEmailAndPassword: (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  },
  registerUser: async (userData) => {
    // Kreiraj novog korisnika u Firestore bazi podataka
    const userRef = doc(db, "users", userData.uid);
    await setDoc(userRef, userData);
  },
};

export default firebase;
