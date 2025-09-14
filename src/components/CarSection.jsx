import React from 'react';
import Image from 'next/image';

const CarSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
        <button
          className="px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base rounded-full bg-black text-white font-medium shadow hover:shadow-lg transition"
        >
          Domain Applications
        </button>
        <button
          className="px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
        >
          Vehicle OS
        </button>
        <button
          className="px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
        >
          Cloud, Edge Analytics & Data Management
        </button>
        <button
          className="px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
        >
          Vehicle Engineering & Design
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Domain Applications</h3>
          <ul className="space-y-2 sm:space-y-4 text-purple-700 font-medium text-base sm:text-lg">
            <li className="cursor-pointer hover:text-purple-900">
              Autonomous Driving & ADAS
            </li>
            <li className="cursor-pointer hover:text-purple-900">
              Body Electronics
            </li>
            <li className="cursor-pointer hover:text-purple-900">Chassis</li>
            <li className="cursor-pointer hover:text-purple-900">Cockpit</li>
            <li className="cursor-pointer hover:text-purple-900">Propulsion</li>
          </ul>
        </div>
        <div className="relative flex justify-center">
          <Image
            src="https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/car.png"
            alt="Car"
            width={800}
            height={400}
            className="object-contain w-full max-w-[600px] sm:max-w-[800px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CarSection;