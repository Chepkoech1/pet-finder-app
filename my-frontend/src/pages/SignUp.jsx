import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await fetch("https://pet-finder-q9h3.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        username,
      }),
    });

    const data = await resp.json();

    if (data.message) {
      setMessage(data.message);
      setError("");
      history.push("/login");
    } else {
      setMessage("");
      setError(data.error);
    }
  };

  return (
    <div className="signup-form-card" style={{display:"flex" , flexDirection:"column" , margin: "4em"}}>
      <form onSubmit={handleSubmit}>
        <label>USERNAME:</label>
        <input
          placeholder="Enter fullname"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>EMAIL:</label>
        <input
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>PASSWORD:</label>
        <input
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}