import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // defining useStates for handling errors
  const [emailError, setEmailError] = useState("Invalid email format");
  const [passwordError, setPasswordError] = useState(false);
  const [matchPasswordError, setMatchPasswordError] = useState(false);

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (emailRegex.test(inputEmail)) {
      setEmailError(null);
    } else setEmailError("Invalid email format");
  };

  const validatePassword = (input) => {
    setPasswordError(input.length >= 8);
  };

  const matchPassword = (input) => {
    setMatchPasswordError(input === password);
  };

  const createAccount = (e) => {
    e.preventDefault();
    if (emailError === null && passwordError && matchPasswordError) {
      alert("Form submitted successfully!");
    } else {
      // console.log(emailError, passwordError, matchPasswordError);
      alert("Can’t submit the form");
    }
  };

  return (
    <div className="App">
      <form action="" onSubmit={createAccount}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            value={email}
          />
          <br />
          {emailError !== null ? <p>{emailError}</p> : ""}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            id="password"
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            value={password}
          />
          <br />
          {!passwordError && <p>password must be at least 8 characters</p>}
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <br />
          <input
            id="confirm-password"
            type="text"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              matchPassword(e.target.value);
            }}
          />
          <br />
          {!matchPasswordError && <p>Password do not match</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default App;
