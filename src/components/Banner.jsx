import React from "react";
import ThreeJsWave from "../commonComponents/ThreeJsWave";

const Banner = () => {
  return (
    <section className="w-full min-h-screen bg-white px-4 sm:px-6 lg:px-12 
      pt-6 sm:pt-24 md:pt-28 lg:pt-32 
      pb-0 text-center relative overflow-hidden flex flex-col items-center justify-start">
      <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-3 sm:px-4 py-1 rounded-full relative z-10">
        <span className="h-2 w-2 bg-lime-400 rounded-full"></span>
        <span className="text-xs sm:text-sm md:text-base text-gray-800">
          JSW Motors & KPIT Technologies forge strategic collaboration
        </span>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-snug sm:leading-tight lg:leading-[1.1] relative z-10 mt-6">
        Shaping The Future <br className="hidden sm:block" /> Of Mobility
      </h1>
      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto relative z-10 px-2">
        We are reimagining mobility for creating a cleaner, smarter and safer
        world.
      </p>
      <div className="relative w-full h-46 sm:h-80 md:h-[400px] mt-[14rem] sm:mt-8">
        <ThreeJsWave enableCursorMovement={true} />
      </div>
    </section>
  );
};

export default Banner;
