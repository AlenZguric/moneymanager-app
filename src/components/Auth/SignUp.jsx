import React, { useState } from "react";
import { signUp } from "./firebaseUtils";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [userType, setUserType] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Registracija novog korisnika
    const user = {
      ime: firstName,
      prezime: lastName,
      email: email,
      password: password,
      korisnik: userType,
      spol: gender,
    };

    await signUp(email, password);

    // Nakon registracije, možeš dodati dodatnu logiku, preusmjeravanje itd.
  };

  return (
    <div>
      <h2>Registracija</h2>
      <form onSubmit={handleSignUp}>
        <label>
          Ime:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Prezime:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Spol:
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </label>
        <br />
        <label>
          Korisnik:
          <input
            type="text"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Registriraj se</button>
      </form>
    </div>
  );
};

export default SignUp;
