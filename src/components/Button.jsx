import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { VscArrowRight } from "react-icons/vsc";

const Button = () => {
  return (
    <div className="flex justify-center items-center h-full w-full gap-3">
      {/* button 1 */}
      {/* <button className="group px-4 py-2 capitalize font-small text-xl flex justify-center gap-2 items-center border-black border-2 rounded-lg hover:border-red-500 transition-all duration-300 ease-in-out">
          contact
          <span className="scale-125 transition-transform duration-300 group-hover:rotate-90">
            <VscArrowRight className="text-red-500 transition-transform duration-300 group-hover:rotate-[-135deg] group-hover:scale-[120%]" />
          </span>
        </button> */}

      {/* button 2 */}
      {/* <button className="group flex justify-center capitalize items-center gap-1.5 text-xl bg-black p-3 text-white rounded-lg">
          contact{" "}
          <span className="overflow-hidden group-hover:translate-x-[-50%] transition-all duration-300">
            <span className="flex gap-2 translate-x-[-50%] group-hover:translate-x-[50%] transition-all duration-300">
              <IoIosArrowRoundForward className="text-red-500 scale-150" />
              <IoIosArrowRoundForward className="text-red-500 scale-150" />
            </span>
          </span>
        </button> */}

      {/* button 3 */}
      {/* <button className="relative flex justify-center items-center gap-2.5 text-lg font-medium bg-[#222222] px-5 py-3 text-white rounded-xl capitalize">
        <IoIosArrowRoundForward className=" absolute left-2 text-[#E11C2E] scale-150" />
        <span className="px-3.5">discover more</span>
      </button> */}

      <a href="#" className="group relative flex justify-center items-center gap-3 rounded-lg bg-[#222222] px-6 py-3 font-semibold text-sm text-white transition-all duration-300 ease-in-out">
        <span className="scale-110 flex text-[#E81C2E] transition-all duration-500 ease-in-out group-hover:translate-x-[750%]"><VscArrowRight/></span>
        <span className="group-hover:translate-x-[-25%] transition-all duration-500">Discover More</span>
      </a>
    </div>
  );
};

export default Button;
