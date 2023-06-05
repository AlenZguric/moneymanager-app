import React, { useState } from "react";
import { signIn } from "../../firebase/firebaseUtils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      // Uspješna prijava
    } catch (error) {
      // Greška pri prijavi
    }
  };

  return (
    <div>
      <h2>Prijava</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Lozinka"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Prijavi se</button>
      </form>
    </div>
  );
};

export default SignIn;
