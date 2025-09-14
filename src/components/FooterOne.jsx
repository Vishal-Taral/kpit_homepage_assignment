import React from "react";
import ThreeJsWave from "../commonComponents/ThreeJsWave";
import { FaLongArrowAltRight } from "react-icons/fa";
import Cta from "@/commonComponents/Cta";

const FooterOne = () => {
  return (
    <div className="relative w-full bg-[#111111] text-white overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto py-20 px-6 text-center flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Reimagining <br />
          <span className="font-bold">
            Mobility <span className="italic">With</span> YOU
          </span>
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          Get the important updates from the world of mobility.
        </p>
        <Cta ctaName={'Subscribe'}/>
      </div>
      <div className="w-full h-[290px]">
        <ThreeJsWave />
      </div>
    </div>
  );
};

export default FooterOne;
