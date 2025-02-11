import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-500 flex-row justify-between">
      <div className="flex-column text-red-500">
        <img className="size-32" src="/logo.png" alt="Logo"  />
        <span>ChatBot</span>
      </div>
      <div>
        <Link to="/" style={{ color: "white", marginRight: "10px" }}>Home</Link>
        <Link to="/login" style={{ color: "white", marginRight: "10px" }}>Login</Link>
        <Link to="/register" style={{ color: "white", marginRight: "10px" }}>Register</Link>
        <Link to="/chat" style={{ color: "white" }}>Chat</Link>
      </div>
    </nav>
  );
};

export default Navbar;
