import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { faqData } from "../data/faqData"; // Import the FAQ data

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center justify-center py-12 px-6">
      {/* === FAQ Section === */}
      <motion.div
        className="w-full max-w-4xl bg-white border border-[#dcdcdc] rounded-lg p-8 mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${
              activeIndex === index
                ? "border-b-2 border-[#4a4848]"
                : "border-b border-[#d3d0d0]"
            } last:border-none`}
          >
            <button
              className="w-full flex justify-between items-center py-7 text-left group focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-[#222222] text-base leading-[22px] transition-colors duration-300">
                {item.question}
              </span>

              <motion.div
                className="flex items-center justify-center w-6 h-6 rounded-full bg-red-gradient hover:bg-red transition-colors duration-300"
                initial={{ rotate: 0 }}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeIndex === index ? (
                  <Minus className="text-white w-5 h-5" />
                ) : (
                  <Plus className="text-white w-5 h-5" />
                )}
              </motion.div>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <p className="font-normal text-[#666666] text-base leading-[26px] pb-5">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>

      {/* === Contact Section === */}
      <div className="relative w-full mt-20 flex items-center flex-col gap-4 justify-center">
        <p className="border border-1 border-red rounded-full px-4 py-1 mt-10 font-inter font-medium text-[10px] sm:text-[12px] leading-[10px] sm:leading-[12px] text-[#222222]">
          GET IN TOUCH
        </p>

        <h1 className="font-inter font-semibold text-[32px] sm:text-[48px] leading-[40px] sm:leading-[58px] text-[#222222] mb-10 text-center">
          Catch us here asap here
        </h1>

        <div className="flex flex-col md:flex-row max-w-[900px] w-full shadow-lg rounded-lg overflow-hidden border border-[#dddcdc]">
          <div className="bg-[#ffffff] bg-opacity-95 p-4 sm:p-12 flex flex-col justify-center items-start w-full md:w-1/2">
            <h2 className="font-inter font-semibold text-[22px] sm:text-[26px] leading-[32px] sm:leading-[36px] text-[#222222] mb-8 sm:mb-12">
              Main Branch
            </h2>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+13173130713"
                className="flex items-center group cursor-pointer mb-4 sm:mb-6"
              >
                <div className="bg-red-100 rounded-lg p-3 mr-4 border border-[#c0bdbd] transition duration-300 group-hover:border-red group-hover:bg-red-200">
                  <FiPhone className="sm:w-6 sm:h-6 w-4 h-4 text-red transition duration-300 group-hover:text-[#E81C2E]" />
                </div>
                <div className="flex flex-col items-start gap-3">
                  <p className="font-inter font-medium text-[10px] sm:text-[12px] leading-[10px] sm:leading-[12px] text-[#555454] uppercase">
                    Phone Number
                  </p>
                  <span className="font-inter font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] transition-colors duration-200 group-hover:text-[#E81C2E]">
                    +1 (317) 313-0713
                  </span>
                </div>
              </a>

              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group cursor-pointer mb-4 sm:mb-6"
              >
                <div className="bg-red-100 rounded-lg p-3 mr-4 border border-[#c0bdbd] transition duration-300 group-hover:border-red group-hover:bg-red-200">
                  <FiMapPin className="sm:w-6 sm:h-6 w-4 h-4  text-red transition duration-300 group-hover:text-[#E81C2E]" />
                </div>
                <div className="flex flex-col items-start gap-3">
                  <p className="font-inter font-medium text-[10px] sm:text-[12px] leading-[10px] sm:leading-[12px] text-[#555454] uppercase">
                    Office Address
                  </p>
                  <span className="font-inter font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] transition-colors duration-200 group-hover:text-[#E81C2E]">
                    2965 Heirloom Lane Greenwood, IN 46143
                  </span>
                </div>
              </a>

              <a
                href="mailto:indyrepairshop@yahoo.com"
                className="flex items-center group cursor-pointer"
              >
                <div className="bg-red-100 rounded-lg p-3 mr-4 border border-[#c0bdbd] transition duration-300 group-hover:border-red group-hover:bg-red-200">
                  <FiMail className="sm:w-6 sm:h-6 w-4 h-4  text-red transition duration-300 group-hover:text-[#E81C2E]" />
                </div>
                <div className="flex flex-col items-start gap-3">
                  <p className="font-inter font-medium text-[10px] sm:text-[12px] leading-[10px] sm:leading-[12px] text-[#555454] uppercase">
                    Email Address
                  </p>
                  <span className="font-inter font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] transition-colors duration-200 group-hover:text-[#E81C2E] break-words max-w-[180px] sm:max-w-[250px] md:max-w-none">
                    indyrepairshop@yahoo.com
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="/faq/faq.avif"
              alt="Shop Center"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
