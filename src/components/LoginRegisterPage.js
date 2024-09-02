import React, { useState } from 'react';
import './LoginRegisterPage.css';
import logo from '../Images/logo.png';

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    role: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Login submitted:' : 'Registration submitted:', formData);
    // Add your form submission logic here
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      fullName: '',
      mobile: '',
      role: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="login-register-container">
      <div className="form-logo-section">
      <img className="form-logo" src={logo} alt="Logo" />
      </div>
      <div className="form-section">
        <div className="form-container">
          <h1>Hello!</h1>
          <p>{isLogin ? 'Sign In to Get Started' : 'Sign Up to Get Started'}</p>
          
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            )}
            {!isLogin && (
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            )}
            {!isLogin && (
              <div className="select-wrapper">
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Role</option>
                  <option value="user">User</option>
                  <option value="journalist">Journalist</option>
                  <option value="editor">Editor</option>
                </select>
              </div>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {!isLogin && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            )}
            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
          </form>
          
          <p className="toggle-mode">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button className="toggle-button" onClick={toggleMode}>
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
