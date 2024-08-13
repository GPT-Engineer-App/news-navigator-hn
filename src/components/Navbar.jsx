import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-orange-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Newspaper className="h-6 w-6" />
          <span>HN Reader</span>
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <a href="https://news.ycombinator.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Official HN
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;