import React from 'react';
import clsx from 'clsx';
import styles from '../styles/headerOne.module.scss';
import { FiSearch } from 'react-icons/fi';
import { SlArrowDown } from 'react-icons/sl';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={clsx(styles.main, 'w-full border-b border-black ')}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-3 py-2">
        <div className="text-2xl font-bold tracking-widest text-black"><Image src={'https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/logo.svg'} alt='KPIT logo' width={70} height={20}/></div>
        <nav className="flex items-center space-x-8 text-sm font-semibold text-black">
          {['Mobility', 'Expertise', 'Insights', 'Company', 'Careers', 'Investors'].map((item) => (
            <div key={item} className="relative group cursor-pointer">
              <span>{item}</span>
              <span className="ml-1 inline-block align-middle"><SlArrowDown /></span>
            </div>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <FiSearch className="text-purple-600 text-xl cursor-pointer" />
          <button className="border border-purple-600 text-purple-600 px-4 py-1.5 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
