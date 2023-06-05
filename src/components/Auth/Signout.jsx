import React from "react";
import { signOut } from "./firebaseUtils";

const SignOut = () => {
  const handleSignOut = async () => {
    // Odjava korisnika
    await signOut();

    // Nakon odjave, možeš dodati dodatnu logiku, preusmjeravanje itd.
  };

  return (
    <div>
      <h2>Odjava</h2>
      <button onClick={handleSignOut}>Odjavi se</button>
    </div>
  );
};

export default SignOut;
