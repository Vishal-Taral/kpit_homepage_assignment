import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Cta = ({ctaName}) => {
  return (
    <div>
      <button
        className="mt-6 px-6 py-3 bg-[#7e4fff]
              hover:border-[#7e4fff] text-white font-semibold rounded-full 
              shadow-lg transition duration-300 flex items-center w-fit"
      >
        {ctaName}
        <span className="ml-2">
          <FaLongArrowAltRight />
        </span>
      </button>
    </div>
  );
};

export default Cta;
