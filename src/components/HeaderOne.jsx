import React from 'react';
import { SlArrowDown } from "react-icons/sl";

const HeaderOne = () => {
  return (
    <div className={`bg-black p-4 flex justify-end text-white`}>
      <ul className={`flex gap-3 text-[12px]`}>
        <li className='cursor-pointer'>KPIT Worldwide</li>
        <li className='flex items-center gap-2 cursor-pointer'><span>Happenings at KPIT</span><span><SlArrowDown /></span></li>
      </ul>
    </div>
  )
}

export default HeaderOne