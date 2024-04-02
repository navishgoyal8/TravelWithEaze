// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-xl font-bold">Travel Planner</Link>
        </div>
        <div className="space-x-4">
          <Link to={"/"} className="text-sm font-semibold hover:text-gray-400">Home</Link>
          <Link to={"/login"} className="text-sm font-semibold hover:text-gray-400">Login</Link>
          <Link to={"/contact"} className="text-sm font-semibold hover:text-gray-400">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

