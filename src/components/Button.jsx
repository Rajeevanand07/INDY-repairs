import React from "react";
import { VscArrowRight } from "react-icons/vsc";

const Button = (props) => {
  return (
    <div className="flex justify-center items-center h-full w-full gap-3">
      <a
        href="#"
        className="group relative flex justify-center items-center gap-3 rounded-lg bg-[#222222] px-6 py-3 font-semibold text-sm text-white transition-all duration-300 ease-in-out"
      >
        <span className="flex justify-center items-center overflow-hidden">
          <span className="scale-110 flex text-[#E81C2E] left-4 transition-all duration-500 ease-in-out group-hover:translate-x-[100%]">
            <VscArrowRight />
          </span>
        </span>
        <span className="capitalize whitespace-nowrap font-semibold text-base group-hover:translate-x-[-30%] bg-[#222222] transition-all duration-500 ease-in-out">
          {props.text ? props.text : "just button"}
        </span>
        <span className="absolute right-5 flex justify-center items-center overflow-hidden">
          <span className="translate-x-[-100%] scale-110 flex text-[#E81C2E] left-4 transition-all duration-500 ease-in-out group-hover:translate-x-0">
            <VscArrowRight />
          </span>
        </span>
      </a>
    </div>
  );
};

export default Button;
