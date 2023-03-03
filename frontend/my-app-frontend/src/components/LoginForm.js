import React, { useState } from 'react';

const LoginForm = ({ handleLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required />

      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginForm;
