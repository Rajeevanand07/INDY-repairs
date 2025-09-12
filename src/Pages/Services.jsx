import React from "react";
import BannerSection from "../components/BannerSection";
import servicesData from "../data/servicesData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <BannerSection />
      <section className="h-min py-8 px-8 max-w-[1200px] w-full mx-auto">
        <div className="grid gap-10  grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(50px,1fr))] h-min justify-center w-full">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-[10px] border border-gray-200 shadow-none hover:shadow-xl transition-shadow duration-300"
            >
              <Link
                to={`/services/${service.title}`}
              >
                <div className="w-full h-[220px] overflow-hidden rounded-t-[10px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className=" w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col flex-nowrap justify-center items-start content-start gap-8 h-min w-full overflow-hidden p-7">
                  <div className="flex flex-col flex-nowrap gap-4 h-min w-full overflow-hidden p-0">
                    <div className="flex flex-col justify-start opacity-100">
                      <h3 className="font-inter font-semibold text-[20px] leading-6 text-[#222222]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="font-inter  font-[400] text-[14px] leading-6 text-[#666666]">
                      {service.shortDescription}
                    </p>
                  </div>
                  <p className="font-inter font-semibold text-[14px] leading-[14px] uppercase text-[#c9c8c8] group-hover:text-[#e81c2e] transition-colors duration-300">
                    Read More
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-28 my-24 bg-[#F5F5F5]">
  <div className="max-w-[1200px] w-full mx-auto">

    <div className="text-center mb-16">
      <span className="font-inter font-medium text-[12px] leading-[12px] text-[#222222] uppercase border border-[#EB3746] rounded-full p-1 px-2">
        How it works
      </span>
      <h2 className="font-inter font-semibold text-[48px] leading-[58px] text-[#222222] mt-3">
        Easy to follow booking
      </h2>
    </div>

    {/* Main wrapper */}
    <div className="flex flex-col lg:flex-row lg:gap-60 items-center gap-20 h-min justify-start relative">

      {/* Card 1 */}
      <Link
        to="/contact"
        className="group flex flex-col items-center justify-center flex-nowrap gap-10 h-min p-0 relative cursor-pointer no-underline overflow-visible"
      >
        <div className="bg-white w-28 rounded-full opacity-100">
          <img
            src="/services/icon1.svg"
            alt="Bring your car here"
            className="w-full p-8 h-full object-cover object-center rounded-full"
          />
        </div>

        <div className="flex flex-col items-center justify-center flex-nowrap gap-4">
          <h3 className="font-inter font-semibold text-[20px] leading-6 text-center text-[#222222]">
            Bring your car here
          </h3>
          <p className="font-inter font-normal text-[14px] leading-6 text-center text-[#666666]">
            Tell us about your car and choose the date you want.
          </p>
        </div>
        <p className="font-inter uppercase font-semibold text-[14px] leading-[14px] text-[#c9c8c8] group-hover:text-[#e81c2e] transition-colors duration-300">
          contact us
        </p>
      </Link>

      {/* Arrow 1 → 2 (hidden on md and below) */}
      <div className="hidden lg:flex flex-none h-[20px] md:left-60  overflow-hidden absolute top-[46px] w-[154px] z-[1]">
        <div className="absolute inset-0 rounded-inherit">
          <img
            src="/services/arrow1.svg"
            alt="Arrow"
            className="block w-full h-full rounded-inherit object-cover object-center"
            width="155"
            height="20"
          />
        </div>
      </div>

      {/* Card 2 */}
      <Link
        to="/contact"
        className="group flex flex-col items-center justify-center flex-nowrap gap-10 h-min p-0 relative cursor-pointer no-underline overflow-visible"
      >
        <div className="bg-white w-28 rounded-full opacity-100">
          <img
            src="/services/icon2.svg"
            alt="Get a free inspection"
            className="w-full p-8 h-full object-cover object-center rounded-full"
          />
        </div>

        <div className="flex flex-col items-center justify-center flex-nowrap gap-4">
          <h3 className="font-inter text-center font-semibold text-[20px] leading-6 text-[#222222]">
            Get a free inspection
          </h3>
          <p className="font-inter font-normal text-[14px] leading-6 text-center text-[#666666]">
            Share details of your vehicle and select the preferred date.
          </p>
        </div>
        <p className="font-inter uppercase font-semibold text-[14px] leading-[14px] text-[#c9c8c8] group-hover:text-[#e81c2e] transition-colors duration-300">
          contact us
        </p>
      </Link>

      {/* Arrow 2 → 3 (hidden on md and below) */}
      <div className="hidden lg:flex flex-none h-[20px] md:right-72  overflow-hidden absolute top-[46px] w-[154px] z-[1]">
        <div className="absolute inset-0 rounded-inherit">
          <img
            src="/services/arrow2.svg"
            alt="Arrow"
            className="block w-full h-full rounded-inherit object-cover object-center"
            width="155"
            height="20"
          />
        </div>
      </div>

      {/* Card 3 */}
      <Link
        to="/contact"
        className="group flex flex-col items-center justify-center flex-nowrap gap-10 h-min p-0 relative cursor-pointer no-underline overflow-visible"
      >
        <div className="bg-white w-28 rounded-full opacity-100">
          <img
            src="/services/icon3.svg"
            alt="Get solid solution"
            className="w-full p-8 h-full object-cover object-center rounded-full"
          />
        </div>

        <div className="flex flex-col items-center justify-center flex-nowrap gap-4">
          <h3 className="font-inter text-center font-semibold text-[20px] leading-6 text-[#222222]">
            Get solid solution
          </h3>
          <p className="font-inter font-normal text-[14px] leading-6 text-center text-[#666666]">
            Disclose your car's information and pick a preferred date.
          </p>
        </div>
        <p className="font-inter uppercase font-semibold text-[14px] leading-[14px] text-[#c9c8c8] group-hover:text-[#e81c2e] transition-colors duration-300">
          contact us
        </p>
      </Link>
    </div>
  </div>
</section>

    </>
  );
};

export default Services;
