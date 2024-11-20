import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4 px-8 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">FinTech</Link>
      </div>
      {/* Navigation */}
      <nav className="space-x-6">
        <Link to="/" className="hover:text-gray-300 transition duration-200">
          Home
        </Link>
        <Link
          to="/about"
          className="text-white px-4 py-2 hover:bg-blue-600 rounded"
        >
          About
        </Link>

        <Link
          to="/contact"
          className="text-white px-4 py-2 hover:bg-blue-600 rounded"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
