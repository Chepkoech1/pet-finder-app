import React, { useState } from 'react';

const RegisterForm = ({ handleRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
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
    handleRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required />

      <label htmlFor="password_confirmation">Confirm Password</label>
      <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} required />

      <input type="submit" value="Register" />
    </form>
  );
};

export default RegisterForm;
