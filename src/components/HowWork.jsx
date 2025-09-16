import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tag from "../components/Tag";
// Motion-enabled Link
const MotionLink = motion(Link);

const HowWork = () => {
  return (
    <div className="relative w-full flex flex-col max-md:items-center">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        //   className="font-inter font-medium text-[12px] leading-[12px] text-[#222222] uppercase border-[1px] border-[#EB3746] rounded-[10rem] px-2.5 py-[0.2rem]"
        >
          <Tag text={"how it works"} />
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="font-inter font-semibold text-[48px] leading-[58px] text-[#222222] mt-3"
        >
          Easy to follow booking
        </motion.h2>
      </div>

      {/* Steps + Arrows */}
      <div className="flex flex-col items-stretch max-sm:w-[70%] max-sm:gap-10 max-md:w-[50%] md:flex-row lg:flex-row gap-28 lg:gap-10 h-min justify-center relative">
        {/* Card 1 */}
        <MotionLink
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          to="/contact"
          className="group flex flex-col items-center justify-between gap-12 relative cursor-pointer no-underline"
        >
          <div className="bg-white w-28 h-28 rounded-full flex items-center justify-center">
            <img
              src="/services/icon1.svg"
              alt="Bring your truck here"
              className="w-16 h-16"
            />
          </div>
          <div className="text-center space-y-5">
            <h3 className="font-inter font-semibold text-[20px] text-[#222222]">
              Bring your truck here
            </h3>
            <p className="font-inter text-[14px] lg:px-16 text-[#666666]">
              Drive to our service point or schedule a pick-up we’ll take care
              of the rest.
            </p>
            <p className="font-inter text-red lg:text-[#c9c8c8] uppercase font-semibold text-[14px] group-hover:text-[#e81c2e] transition-colors duration-300">
                contact us
            </p>
          </div>
          
        </MotionLink>

        {/* Arrow 1 - show only on desktop */}
        <div className="hidden lg:block absolute top-16 left-1/4">
          <img
            src="/services/arrow1.svg"
            alt="Arrow"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Card 2 */}
        <MotionLink
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          to="/contact"
          className="group flex flex-col items-center justify-between gap-12 relative cursor-pointer no-underline"
        >
          <div className="bg-white w-28 h-28 rounded-full flex items-center justify-center">
            <img
              src="/services/icon2.svg"
              alt="Get an inspection"
              className="w-16 h-16"
            />
          </div>
          <div className="text-center space-y-5">
            <h3 className="font-inter font-semibold text-[20px] text-[#222222]">
              Get an inspection
            </h3>
            <p className="font-inter text-[14px] lg:px-16 text-[#666666]">
              Our experts check your truck thoroughly and provide a detailed
              report of issues.
            </p>
            <p className="font-inter text-red lg:text-[#c9c8c8] uppercase font-semibold text-[14px] text-[#c9c8c8] group-hover:text-[#e81c2e] transition-colors duration-300">
                contact us
            </p>
          </div>
        </MotionLink>

        {/* Arrow 2 - show only on desktop */}
        <div className="hidden lg:block absolute top-16 right-[25%]">
          <img
            src="/services/arrow2.svg"
            alt="Arrow"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Card 3 */}
        <MotionLink
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          to="/contact"
          className="group flex flex-col justify-between items-center gap-12 relative cursor-pointer no-underline"
        >
          <div className="bg-white w-28 h-28 rounded-full flex items-center justify-center">
            <img
              src="/services/icon3.svg"
              alt="Get solid solution"
              className="w-16 h-16"
            />
          </div>
          <div className="text-center space-y-5">
            <h3 className="font-inter font-semibold  text-[20px] text-[#222222]">
              Get solid solution
            </h3>
            <p className="font-inter text-[14px] lg:px-16 text-[#666666]">
              Receive professional repair or service tailored to keep your truck
              running smoothly.
            </p>
            <p className="font-inter text-red lg:text-[#c9c8c8] uppercase font-semibold text-[14px] text-[#c9c8c8] group-hover:text-[#e81c2e] transition-colors duration-300">
                contact us
            </p>
          </div>
        </MotionLink>
      </div>
    </div>
  );
};

export default HowWork;