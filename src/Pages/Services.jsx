import React, { useEffect, useState } from "react";
import BannerSection from "../components/BannerSection";
import servicesData from "../data/servicesData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HowWork from "../components/HowWork";
import Button from "../components/Button"; // Import the Button component

// Minimal, reusable fade-up animation config
const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true, amount: 0.01 }
};

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  // Decide which services to display
  const displayedServices = showAll ? servicesData : servicesData.slice(0, 6);
  const quotes = [
    "All-in-one truck servicing solutions",
    "All-in-one truck servicing solutions",
    "All-in-one truck servicing solutions",
    "All-in-one truck servicing solutions",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BannerSection />

      {/* Services Grid */}
      <motion.section className="h-min py-8 pt-16 px-8 max-w-[1250px] w-full mx-auto" {...fadeUp}>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(50px,1fr))] w-full">
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-[10px] border border-gray-200 shadow-none hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <Link to={`/service/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="flex flex-col h-full">
                <div className="w-full h-[220px] overflow-hidden rounded-t-[10px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between flex-grow p-7">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-inter font-semibold text-[20px] leading-6 text-[#222222]">
                      {service.title}
                    </h3>
                    <p className="font-inter text-[14px] leading-6 text-[#666]">
                      {service.shortDescription}
                    </p>
                  </div>
                  <p className="mt-6 font-inter font-semibold text-[14px] leading-[14px] uppercase text-[#aca9a9] group-hover:text-[#e81c2e] transition-colors duration-300">
                    Read More
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load More / Show Less Button */}
        {servicesData.length > 6 && (
          <div className="flex justify-center mt-10">
            <Button 
              onClick={() => setShowAll(!showAll)}
              variant="red"
              text={showAll ? "Show Less" : "Load More"}
              className="px-6 py-3 transition-colors"
            />
          </div>
        )}
      </motion.section>

      {/* How it works Section */}
      <motion.section className="py-28 my-24 mb-8 bg-[#F5F5F5]" {...fadeUp}>
        <HowWork />
      </motion.section>

      {/* Scrolling Effect */}
      <motion.section className="overflow-hidden w-full py-2 mb-24" {...fadeUp}>
        <div
          className="w-full p-2"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
          }}
        >
          <motion.ul
            className="flex gap-10 whitespace-nowrap"
            style={{ display: "flex" }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {quotes.map((quote, idx) => (
              <li
                key={idx}
                className=" font-inter font-semibold text-[64px] sm:text-[96px] md:text-[128px] 
                leading-[64px] sm:leading-[96px] md:leading-[128px] text-[#222222]"
              >
                {quote}
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

    </>
  );
};

export default Services;
