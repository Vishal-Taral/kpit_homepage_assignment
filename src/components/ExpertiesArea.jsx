import React from "react";

const ExpertiesArea = () => {
  return (
    <div className="relative w-full h-[400px] bg-black overflow-hidden">
      <div className="absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          Areas Of Expertise
        </h3>
        <p className="text-lg leading-relaxed max-w-4xl">
          <span className="text-lime-400 font-semibold">
            Substantial Cost Reduction | Faster Release of Vehicles and Features
            | Reliability | Complying to Fast Changing Regulations
          </span>
          <br />
          Reimagining software and systems for mobility for over two decades
          offering end to end solutions across chip to cloud
        </p>
      </div>
    </div>
  );
};

export default ExpertiesArea;
