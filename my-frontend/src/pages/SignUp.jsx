
import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const [username, setUsername] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with email and password, e.g. send them to the server
    console.log(`Email: ${email}, Password: ${password}`);
    // Reset form fields
    setEmail('');
    setPassword('');
    setUsername('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <div className = "signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="username" value={username} onChange={handleUsernameChange} required>
            
          </input>
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;


