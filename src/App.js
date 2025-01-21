import React, { useState } from "react";
import LoginPage from "./components/loginPage";
import Reset from "./components/forgetPassword";

export default function App() {
  const [form, setForm] = useState("login");
  return (
    <div className="App">
      <h1>Welcome!</h1>
      {form === "login" ? <LoginPage /> : <Reset />}

      <button
        onClick={() => {
          setForm(form === "login" ? "reset" : "login");
        }}
      >
        {form === "login" ? "Forget Password" : "Back to Login"}
      </button>
    </div>
  );
}
