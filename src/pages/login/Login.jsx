import "./login.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    // Simulate authorization
    if (email === "komal@gmail.com" && password === "komal123") {
      // Redirect to home page
      history.push("/home");
    } else {
      setError("Invalid email or password");
      // Clear input fields
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter Your Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        {error && <p className="errorMessage">{error}</p>}
      </div>
    </>
  );
}
