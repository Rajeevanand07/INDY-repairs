import React from "react";
import { VscArrowRight } from "react-icons/vsc";

const ButtonWhite = (props) => {
  return (
    <div className="flex justify-center items-center h-full w-full gap-3">
      <a
        href="#"
        className="group relative flex justify-center items-center gap-3 rounded-lg bg-white px-6 py-3 font-semibold text-sm text-white transition-all duration-300 ease-in-out"
      >
        <span className="flex justify-center items-center overflow-hidden">
          <span className="scale-110 flex text-red left-4 transition-all duration-500 ease-in-out group-hover:translate-x-[100%]">
            <VscArrowRight />
          </span>
        </span>
        <span className="capitalize whitespace-nowrap font-semibold text-black text-base group-hover:translate-x-[-30%] bg-transparent transition-all duration-500 ease-in-out">
          {props.text ? props.text : "just button"}
        </span>
        <span className="absolute right-5 flex justify-center items-center overflow-hidden">
          <span className="translate-x-[-100%] scale-110 flex text-red left-4 transition-all duration-500 ease-in-out group-hover:translate-x-0">
            <VscArrowRight />
          </span>
        </span>
      </a>
    </div>
  );
};

export default ButtonWhite;
