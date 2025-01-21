import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function LoginPage() {
  //   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { email, setEmail } = useLocalStorage(); //object distructuring

  //   useEffect(() => {
  //     let email = localStorage.getItem("email");

  //     if (email) {
  //       setEmail(email);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem("email", email);
  //   }, [email]);

  return (
    <>
      <h1>Login to the Portal</h1>
      <input
        type="email"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button>Login</button> <br />
    </>
  );
}
// order of hooks is also important in react. in which order you are calling it.
