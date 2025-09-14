import React from "react";
import Cta from "@/commonComponents/Cta";

const GlobalReach = () => {
  return (
    <section className="relative container mx-auto px-70 py-16 text-center">
      <div className="max-w-2xl mx-auto mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          We Have A Global Reach
        </h3>
        <p className="text-gray-600 mb-6">
          KPIT's software and systems are spearheading transformation in the
          global mobility industry, paving the way for next-generation vehicles
          that promise a cleaner, smarter, and safer world.
        </p>
        <div className="flex justify-center">
          <Cta ctaName={"Know More"} />
        </div>
      </div>
      <div className="relative flex justify-center items-center">
        <div className="w-20 h-20 md:w-80 md:h-80 rounded-full flex items-center justify-center shadow-xl">
          <div className="w-full h-full rounded-full">asdf</div>
        </div>

        <div className="absolute -top-10 -left-20 w-40 h-40 flex flex-col items-center justify-center rounded-full bg-purple-100 shadow-md">
          <h4 className="text-xl font-bold">
            20MN<span className="text-lg">+</span>
          </h4>
          <p className="text-sm text-gray-600 mt-1 text-center">
            Vehicles On Road Powered By KPIT Software
          </p>
        </div>

        <div className="absolute -top-10 -right-20 w-40 h-40 flex flex-col items-center justify-center rounded-full bg-green-100 shadow-md">
          <h4 className="text-xl font-bold">14+</h4>
          <p className="text-sm text-gray-600 mt-1 text-center">
            Software Centers Of Excellence Globally
          </p>
        </div>

        <div className="absolute -bottom-10 -left-1 w-40 h-40 flex flex-col items-center justify-center rounded-full bg-green-100 shadow-md">
          <h4 className="text-xl font-bold">25+</h4>
          <p className="text-sm text-gray-600 mt-1 text-center">
            Years Focus On Auto & Mobility
          </p>
        </div>

        <div className="absolute -bottom-10 -right-1 w-40 h-40 flex flex-col items-center justify-center rounded-full bg-purple-100 shadow-md">
          <h4 className="text-xl font-bold">
            13K<span className="text-lg">+</span>
          </h4>
          <p className="text-sm text-gray-600 mt-1 text-center">
            Software Experts Passionate About Mobility And Tech
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
