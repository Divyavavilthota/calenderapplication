import React from 'react';
import './Navbar.css';
import Logo from './logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo1" />
        <span className="logo-text">CT</span>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/admin" className="navbar-link">Admin</a>
        </li>
        <li className="navbar-item">
          <a href="/user" className="navbar-link">User</a>
        </li>
        <li className="navbar-item">
          <a href="/calendar" className="navbar-link">Calender</a>
        </li>
        <li className="navbar-item">
          <a href="/analytics" className="navbar-link">Analytics</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
