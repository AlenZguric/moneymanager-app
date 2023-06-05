import React, { useState } from 'react';
import firebase from '../../firebase/firebaseUtils';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      // Koristi firebase objekt za prijavu korisnika
      await firebase.signInWithEmailAndPassword(email, password);
      console.log("Firebase");
      // Uspješna prijava - dodaj potrebne logiku
    } catch (error) {
      // Greška pri prijavi - obradi grešku
    }
  };

  return (
    <div>
      <h2>Prijava</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Lozinka:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleSignIn}>Prijavi se</button>
      </form>
    </div>
  );
};

export default Signin;
