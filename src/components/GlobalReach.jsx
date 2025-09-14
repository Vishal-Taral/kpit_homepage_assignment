import React from "react";
import Cta from "@/commonComponents/Cta";

const GlobalReach = () => {
  return (
    <section className="relative container mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 text-center">
      
      {/* Mobile */}
      <div className="block md:hidden">
        <div className="max-w-xl mx-auto mb-8">
          <h3 className="text-2xl font-bold mb-4">We Have A Global Reach</h3>
          <p className="text-gray-600 mb-6">
            KPIT's software and systems are spearheading transformation in the
            global mobility industry, paving the way for next-generation vehicles
            that promise a cleaner, smarter, and safer world.
          </p>
          <div className="flex justify-center mb-6">
            <Cta ctaName={"Know More"} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 justify-items-center">
          <div className="w-28 h-28 flex flex-col items-center justify-center rounded-full bg-purple-100 shadow-md">
            <h4 className="text-lg font-bold">20MN+</h4>
            <p className="text-xs text-gray-600 mt-1 text-center">
              Vehicles On Road Powered By KPIT Software
            </p>
          </div>

          <div className="w-28 h-28 flex flex-col items-center justify-center rounded-full bg-green-100 shadow-md">
            <h4 className="text-lg font-bold">14+</h4>
            <p className="text-xs text-gray-600 mt-1 text-center">
              Software Centers Of Excellence Globally
            </p>
          </div>

          <div className="w-28 h-28 flex flex-col items-center justify-center rounded-full bg-green-100 shadow-md">
            <h4 className="text-lg font-bold">25+</h4>
            <p className="text-xs text-gray-600 mt-1 text-center">
              Years Focus On Auto & Mobility
            </p>
          </div>

          <div className="w-28 h-28 flex flex-col items-center justify-center rounded-full bg-purple-100 shadow-md">
            <h4 className="text-lg font-bold">13K+</h4>
            <p className="text-xs text-gray-600 mt-1 text-center">
              Software Experts Passionate About Mobility And Tech
            </p>
          </div>
        </div>

        <div className="w-32 h-32 rounded-full flex items-center justify-center shadow-xl bg-gray-100 mx-auto mt-6">
          Globe
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block px-[15rem]">
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
          <div className="w-40 h-40 md:w-80 md:h-80 rounded-full flex items-center justify-center shadow-xl bg-gray-100 z-10">
            Globe
          </div>
          <div className="absolute -top-15 -left-20 w-40 h-40 flex flex-col items-center justify-center rounded-full bg-purple-100 shadow-md z-20">
            <h4 className="text-xl font-bold">
              20MN<span className="text-lg">+</span>
            </h4>
            <p className="text-sm text-gray-600 mt-1 text-center">
              Vehicles On Road Powered By KPIT Software
            </p>
          </div>

          <div className="absolute -top-15 -right-15 w-40 h-40 flex flex-col items-center justify-center rounded-full bg-green-100 shadow-md z-20">
            <h4 className="text-xl font-bold">14+</h4>
            <p className="text-sm text-gray-600 mt-1 text-center">
              Software Centers Of Excellence Globally
            </p>
          </div>

          <div className="absolute -bottom-1 -left-1 w-40 h-40 flex flex-col items-center justify-center rounded-full bg-green-100 shadow-md z-20">
            <h4 className="text-xl font-bold">25+</h4>
            <p className="text-sm text-gray-600 mt-1 text-center">
              Years Focus On Auto & Mobility
            </p>
          </div>

          <div className="absolute -bottom-1 -right-1 w-40 h-40 flex flex-col items-center justify-center rounded-full bg-purple-100 shadow-md z-20">
            <h4 className="text-xl font-bold">
              13K<span className="text-lg">+</span>
            </h4>
            <p className="text-sm text-gray-600 mt-1 text-center">
              Software Experts Passionate About Mobility And Tech
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default GlobalReach;


