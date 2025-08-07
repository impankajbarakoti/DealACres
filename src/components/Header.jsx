import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">My Website</h1>
      <nav className="flex gap-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/blogs" className="hover:underline">Blogs</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
