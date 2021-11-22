import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Post">Posts</Link>
      <Link to="/LoginForm">LoginForm</Link>
      <Link to="/RegisterForm">RegisterForm</Link>
    </div>
  );
};

export default Nav;
