import React from "react";
import { VscArrowRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Button = ({
  text = "Button",
  variant = "black", // 'black', 'white', or 'red'
  arrow = true,
  className = "",
  ...props
}) => {
  // Define button styles based on variant
  const variants = {
    black: {
      bg: "bg-black",
      text: "text-white",
      arrow: "text-red"
    },
    white: {
      bg: "bg-white",
      text: "text-black",
      arrow: "text-red"
    },
    red: {
      bg: "bg-red-gradient",
      text: "text-white",
      arrow: "text-white"
    }
  };

  const { bg, text: textColor, arrow: arrowColor } = variants[variant] || variants.black;

  return (
    <div className={`flex ${className}`}>
      <Link
        to={props.to}
        className={`group relative flex justify-center items-center gap-3 w-full rounded-lg ${bg} px-6 py-3 font-semibold text-sm ${textColor} transition-all duration-300 ease-in-out`}
        {...props}
      >
        <span className="flex justify-center items-center overflow-hidden">
          <span className={`scale-110 flex ${arrowColor} left-4 transition-all duration-500 ease-in-out group-hover:translate-x-[100%]`}>
            <VscArrowRight />
          </span>
        </span>
        <span className="capitalize whitespace-nowrap font-semibold text-md group-hover:translate-x-[-30%] bg-transparent transition-all duration-500 ease-in-out">
          {text}
        </span>
        {arrow && (
          <span className={`absolute flex right-5 justify-center items-center overflow-hidden ${
            arrow ? "max-sm:right-[33%]" : ""
          }`}>
            <span className={`translate-x-[-100%] scale-110 flex ${arrowColor} left-4 transition-all duration-500 ease-in-out group-hover:translate-x-0`}>
              <VscArrowRight />
            </span>
          </span>
        )}
      </Link>
    </div>
  );
};

export default Button;
