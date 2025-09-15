import React from "react";
import { VscArrowRight } from "react-icons/vsc";

const ButtonRed = ({ text = "just button", arrow, className = "", ...props }) => {

  return (
    <div className={`flex items-center h-full w-full ${className}`}>
      <a
        href="#"
        className="group relative flex justify-center items-center gap-3 w-full rounded-lg bg-red-gradient px-6 py-3 font-semibold text-sm text-white transition-all duration-300 ease-in-out"
        {...props}
      >
        <span className="flex justify-center items-center overflow-hidden">
          <span className="scale-110 flex text-white left-4 transition-all duration-500 ease-in-out group-hover:translate-x-[100%]">
            <VscArrowRight />
          </span>
        </span>
        <span className="capitalize whitespace-nowrap font-semibold text-md group-hover:translate-x-[-30%] bg-transparent transition-all duration-500 ease-in-out">
          {text}
        </span>
        <span
          className={`absolute flex right-5 justify-center items-center overflow-hidden ${
            arrow ? "max-sm:right-[33%]" : ""
          }`}
        >
          <span className="translate-x-[-100%] scale-110 flex text-white left-4 transition-all duration-500 ease-in-out group-hover:translate-x-0">
            <VscArrowRight />
          </span>
        </span>
      </a>
    </div>
  );
};

export default ButtonRed;
