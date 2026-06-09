import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black brutal-shadow px-4 md:px-8 py-4 flex justify-between items-center w-full">
      <div className="text-xl md:text-2xl font-black tracking-tighter">
        SHORTIFY
      </div>
      <div className="flex space-x-6 md:space-x-10 text-sm md:text-base">
        <a href="#" className="hover:underline underline-offset-4 decoration-4">Home</a>
        <a href="#" className="hidden sm:block hover:underline underline-offset-4 decoration-4">Features</a>
        <a href="#" className="hidden sm:block hover:underline underline-offset-4 decoration-4">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
