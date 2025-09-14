import React from "react";
import ThreeJsWave from "../commonComponents/ThreeJsWave";

const Banner = () => {
  return (
    <section className="w-full min-h-screen bg-white px-4 pt-20 pb-0 text-center relative overflow-hidden flex flex-col items-center justify-start">
      <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1 rounded-full relative z-10">
        <span className="h-2 w-2 bg-lime-400 rounded-full"></span>
        <span className="text-sm text-gray-800">
          JSW Motors & KPIT Technologies forge strategic collaboration
        </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight relative z-10 mt-6">
        Shaping The Future <br /> Of Mobility
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
        We are reimagining mobility for creating a cleaner, smarter and safer world.
      </p>
      <ThreeJsWave enableCursorMovement={true}/>
    </section>
  );
};

export default Banner;
