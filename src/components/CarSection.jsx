import React from 'react';
import Image from 'next/image';

const CarSection = () => {
  return (
    <div className="container mx-auto px-[10rem] py-12">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          className="px-6 py-2 rounded-full bg-black text-white font-medium shadow hover:shadow-lg transition"
        >
          Domain Applications
        </button>
        <button
          className="px-6 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
        >
          Vehicle OS
        </button>
        <button
          className="px-6 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
        >
          Cloud, Edge Analytics & Data Management
        </button>
        <button
          className="px-6 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
        >
          Vehicle Engineering & Design
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-6">Domain Applications</h3>
          <ul className="space-y-4 text-purple-700 font-medium text-lg">
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
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CarSection;
