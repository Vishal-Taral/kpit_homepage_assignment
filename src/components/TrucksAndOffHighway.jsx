import React from "react";
import Cta from "@/commonComponents/Cta";

const TrucksAndOffHighway = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Innovative, Tailored Solutions <br /> 
          For Mobility Ecosystem
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between bg-black border border-gray-700 rounded-2xl p-8 shadow-lg">
          <div className="max-w-lg">
            <h4 className="text-2xl font-bold mb-4">Passenger Cars</h4>
            <p className="text-gray-300 mb-6">
              Driving innovation in software and systems for next generation
              passenger cars.
            </p>
            <Cta ctaName={'Know More'}/>
          </div>

          {/* <div className="mt-8 md:mt-0 md:ml-8">
            <img
              src="/images/passenger-car.png" 
              alt="Passenger Car"
              className="w-[400px] md:w-[500px] object-contain"
            />
          </div> */}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between bg-black border border-gray-700 rounded-2xl p-8 shadow-lg mt-10">
          <div className="max-w-lg">
            <h4 className="text-2xl font-bold mb-4">
              <span className="text-green-400">Trucks</span> &
              <span className="text-yellow-400">Off-highway</span>
            </h4>
            <p className="text-gray-300 mb-6">
              Optimizing software and systems for trucks and off-highway
              vehicles: Simplify, Innovate, and Accelerate.
            </p>
            <Cta ctaName={'Know More'}/>
          </div>

          {/* <div className="mt-8 md:mt-0 md:ml-8">
            <img
              src="/images/trucks-offhighway.png" 
              alt="Trucks and Off-highway"
              className="w-[400px] md:w-[500px] object-contain"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TrucksAndOffHighway;
