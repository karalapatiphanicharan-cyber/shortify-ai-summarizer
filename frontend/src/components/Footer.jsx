import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t-4 border-black py-10 text-center mt-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="bg-secondary brutal-border p-1 rounded-lg inline-block">
          <span className="text-xl font-black px-2">S</span>
        </div>
        <p className="font-black dark:text-white tracking-tighter">Shortify AI Summarizer © 2026</p>
        <div className="flex gap-6 text-sm font-bold text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
