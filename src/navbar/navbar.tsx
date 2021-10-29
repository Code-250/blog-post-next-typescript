import React from "react";

export const Navbar: React.FC = () => {
  return (
    <div className="nav-container">
      <div className="content-container">
        <div className="web-logo">
          <p>RM</p>
        </div>
        <div className="nav-btn">
          <button className="nav-login">Login</button>
          <button className="nav-create">Create Account</button>
        </div>
      </div>
    </div>
  );
};
