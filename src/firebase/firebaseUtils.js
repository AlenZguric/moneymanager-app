import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Inicijalizacija Firebase aplikacije s konfiguracijskim podacima
import firebaseConfig from "../firebase/firebaseConfig";
firebase.initializeApp(firebaseConfig);

// Referenca na Firebase autentifikaciju i Firestore bazu podataka
const auth = firebase.auth();
const db = firebase.firestore();

// Pomoćna funkcija za prijavu korisnika
export const signIn = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    // Prijavljen korisnik
  } catch (error) {
    // Greška pri prijavi
    console.log(error);
  }
};

// Pomoćna funkcija za registraciju novog korisnika
export const signUp = async (email, password, user) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    const uid = auth.currentUser.uid;
    // Kreiranje novog dokumenta s korisničkim podacima u Firestore bazi podataka
    await db.collection("users").doc(uid).set(user);
    // Novi korisnik registriran
  } catch (error) {
    // Greška pri registraciji
    console.log(error);
  }
};

// Pomoćna funkcija za odjavu korisnika
export const signOut = async () => {
  try {
    await auth.signOut();
    // Korisnik odjavljen
  } catch (error) {
    // Greška pri odjavi
    console.log(error);
  }
};

// Pomoćna funkcija za dohvat podataka iz Firestore baze podataka
export const getFirestoreData = async (collectionName) => {
  try {
    const snapshot = await db.collection(collectionName).get();
    const data = snapshot.docs.map((doc) => doc.data());
    return data;
  } catch (error) {
    // Greška pri dohvaćanju podataka
    console.log(error);
    return [];
  }
};

// Ostale pomoćne funkcije...

export default firebase;
