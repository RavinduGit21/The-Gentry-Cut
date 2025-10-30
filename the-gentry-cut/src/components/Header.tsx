'use client';

import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) { // Appears when scrolled past ~80% of hero
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 bg-deep-black bg-opacity-90 transition-all duration-300 ${isSticky ? 'py-4 shadow-lg' : 'py-0 -translate-y-full'}`}>
      <nav className="container mx-auto flex justify-center px-8">
        <ul className="flex space-x-8">
          <li>
            <a href="#home" className="text-subtle-off-white uppercase tracking-widest font-sans text-sm hover:text-gold-accent transition-colors duration-300">Home</a>
          </li>
          <li>
            <a href="#services" className="text-subtle-off-white uppercase tracking-widest font-sans text-sm hover:text-gold-accent transition-colors duration-300">Services</a>
          </li>
          <li>
            <a href="#gallery" className="text-subtle-off-white uppercase tracking-widest font-sans text-sm hover:text-gold-accent transition-colors duration-300">Gallery</a>
          </li>
          <li>
            <a href="#booking" className="text-subtle-off-white uppercase tracking-widest font-sans text-sm hover:text-gold-accent transition-colors duration-300">Book</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
