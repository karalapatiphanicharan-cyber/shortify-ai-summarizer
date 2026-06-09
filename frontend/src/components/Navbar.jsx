import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b-4 border-black brutal-shadow px-4 md:px-8 py-4 flex justify-between items-center w-full transition-colors duration-300">
      <div className="flex items-center gap-3">
        <div className="bg-secondary brutal-border p-1 rounded-lg">
          <span className="text-xl font-black px-2">S</span>
        </div>
        <div className="text-xl md:text-2xl font-black tracking-tighter dark:text-white">
          SHORTIFY
        </div>
      </div>
      <div className="flex items-center space-x-4 md:space-x-8">
        <div className="hidden sm:flex space-x-6 md:space-x-10 text-sm md:text-base dark:text-white">
          <a href="#" className="hover:underline underline-offset-4 decoration-4">Home</a>
          <a href="#" className="hover:underline underline-offset-4 decoration-4">Features</a>
          <a href="#" className="hover:underline underline-offset-4 decoration-4">About</a>
        </div>

        <button
          onClick={toggleDarkMode}
          className="p-2 brutal-border brutal-shadow-sm bg-white dark:bg-slate-700 dark:text-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all focus:outline-none focus:ring-4 focus:ring-primary/40"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
