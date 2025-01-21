// import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function Reset() {
  //   const [email, setEmail] = useState("");

  //   useEffect(() => {
  //     let email = localStorage.getItem("email");

  //     if (email) {
  //       setEmail(email);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem("email", email);
  //   },[email]);

  const { email, setEmail } = useLocalStorage(); //object distructuring

  return (
    <>
      <h1>Reset Your Password</h1>
      <input
        placeholder="Enter Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button>Continue</button>
      <br />
    </>
  );
}
