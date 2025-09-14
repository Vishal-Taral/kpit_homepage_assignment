import React, { useState } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { SlArrowDown } from 'react-icons/sl';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full border-b border-black bg-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-widest text-black">
          <Image 
            src="https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/logo.svg" 
            alt="KPIT logo" 
            width={70} 
            height={20}
            className="w-auto h-6 md:h-8"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold text-black">
          {['Mobility', 'Expertise', 'Insights', 'Company', 'Careers', 'Investors'].map((item) => (
            <div key={item} className="relative group cursor-pointer flex items-center hover:text-purple-600 transition">
              <span>{item}</span>
              <SlArrowDown className="ml-1 w-4 h-4" />
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl text-black" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Search and Contact */}
        <div className="hidden md:flex items-center space-x-4">
          <FiSearch className="text-purple-600 text-xl cursor-pointer hover:text-purple-800 transition" />
          <button className="border border-purple-600 text-purple-600 px-4 py-1.5 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition">
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-black">
          <nav className="flex flex-col items-center space-y-4 py-4 text-sm font-semibold text-black">
            {['Mobility', 'Expertise', 'Insights', 'Company', 'Careers', 'Investors'].map((item) => (
              <div key={item} className="flex items-center cursor-pointer hover:text-purple-600 transition">
                <span>{item}</span>
                <SlArrowDown className="ml-1 w-4 h-4" />
              </div>
            ))}
            <FiSearch className="text-purple-600 text-xl cursor-pointer hover:text-purple-800 transition" />
            <button className="border border-purple-600 text-purple-600 px-4 py-1.5 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition">
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;