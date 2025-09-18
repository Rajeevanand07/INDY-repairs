import React from 'react';
import Tag from '../components/Tag';
import Button from '../components/Button';
import StatsSection from '../components/StateSection';
import BannerSection from '../components/BannerSection';
import { motion } from 'framer-motion';

// Minimal, reusable fade-up animation config
const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
  viewport: { once: true, amount: 0.01 }
};

export default function About() {
  const timeline = [
    {
      year: "2009",
      title: "Started Truck Repairs",
      desc: "We began providing reliable truck repair services for all vehicle types.",
      bg: "bg-white text-[#E81C2E]",
    },
    {
      year: "2014",
      title: "Service Expansion",
      desc: "Opened new centers to serve more truck owners with quality repairs.",
      bg: "bg-[#E81C2E] text-white",
    },
    {
      year: "2018",
      title: "Tech Upgrades",
      desc: "Adopted modern tools and techniques for faster, more accurate truck repairs.",
      bg: "bg-black text-white",
    },
    {
      year: "2024",
      title: "15 Years Strong",
      desc: "Celebrating fifteen years of trusted service with reliability and customer satisfaction.",
      bg: "bg-white text-[#E81C2E]",
    },
  ];
  
  

  return (
    <>
      {/* Our Mission Section */}
      <BannerSection />
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24" {...fadeUp}>
            {/* Left Column - Image */}
            <div className="w-full md:w-1/2 lg:w-[750px] h-[500px] lg:h-[590px] bg-black flex items-start justify-center overflow-hidden rounded-lg relative">
              {/* Background Text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
                <div className="text-center transform scale-100 md:scale-150">
                  <div className="text-white text-6xl md:text-[100px] font-bold tracking-widest leading-[0.9]">
                    Inddy
                  </div>
                  <div className="text-white text-6xl md:text-[100px] font-bold tracking-widest">
                    Repair
                  </div>
                </div>
              </div>
              <div className="absolute top-8 left-[-20px] right-0 bottom-0">
                <img
                  src="/our-mission.avif"
                  alt="Our Mission"
                  className="w-full h-full object-contain object-top"
                />
              </div>
              {/* Testimonial */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 max-w-[300px] md:max-w-[400px] text-right">
                <p className="text-white font-semibold text-xl md:text-2xl leading-tight md:leading-[34px] mb-2">
                  "They exceeded all my<br />
                  expectations, arriving on time."
                </p>
                <p className="text-[#7A7A7A] font-normal text-base leading-[26px]">
                  Felipe D. Hawthorne
                </p>
              </div>
            </div>

            {/* Right Column - Content */}
            <motion.div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-8 md:gap-12 text-center md:text-left" {...fadeUp}>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission</h1>
                <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                  We are committed to providing top-quality automotive repair services with honesty, integrity, and exceptional customer service. Our team of certified technicians uses the latest tools and technology to ensure your vehicle receives the best care possible.
                </p>
              </div>
              <div className="w-full flex justify-center md:justify-start">
                <Button text="Learn More" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-[#F5F5F5] w-full flex items-center justify-center py-16 px-6 md:p-24">
        <div className="text-center w-full flex flex-col gap-12 justify-center items-center">
          {/* Section Header */}
          <motion.div className='flex flex-col gap-4 items-center max-w-xl' {...fadeUp}>
            <Tag text="our history" />
            <h2 className="text-3xl md:text-[45px] font-semibold leading-tight md:leading-[1.1] text-gray-900 mb-4 md:mb-12">
              Check out our company journey & things
            </h2>
          </motion.div>
          {/* Timeline Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {timeline.map((item, index) => (
              <motion.div key={index} className="flex flex-col items-center text-center" {...fadeUp}>
                {/* Year Circle */}
                <div
                  className={`flex items-center justify-center w-32 h-32 md:w-[8rem] md:h-[8rem] rounded-full font-bold text-xl md:text-[24px] mb-6 ${item.bg}`}
                >
                  {item.year}
                </div>
                {/* Title */}
                <h3 className="text-lg md:text-[20px] font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-[#6D6D6D] text-base md:text-[16px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className='w-full flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16 py-16 px-6 lg:p-24'>

        {/* Left Block: Text and Button (Aligned Top-Left on Desktop) */}
        <motion.div className='w-full lg:w-1/3 lg:sticky lg:top-24 flex flex-col gap-8 items-center text-center lg:items-start lg:text-left' {...fadeUp}>
          <div className='flex flex-col gap-4 items-center lg:items-start'>
            <Tag text="our expertise" />
            <h2 className='text-3xl md:text-[45px] font-semibold leading-tight md:leading-[1.1] text-gray-900'>
              Meet with our <br /> happy experts
            </h2>
          </div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
            Our team of certified professionals is dedicated to providing the highest quality service. We are passionate about what we do and committed to your satisfaction.
          </p>
          <Button text="Join with us" />
        </motion.div>

        {/* Right Block: Team Cards (Larger and positioned below/right on Desktop) */}
        <motion.div className="w-full lg:w-2/3 flex flex-col sm:flex-row gap-8" {...fadeUp}>
          {/* Card 1 & 2 */}
          {['team1.avif', 'team2.avif'].map((img, index) => (
            <div key={index} className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden group">
              <img src={img} alt={`Team member ${index + 1}`} className="h-full w-full object-cover" />
              <div className="absolute bottom-0 left-1/2 w-[80%] text-black p-4 translate-y-full group-hover:translate-y-[-1.5rem] transition-transform duration-300 bg-white rounded-t-lg shadow-md -translate-x-1/2">
                <h3 className="text-lg font-semibold">{index === 0 ? "John Doe" : "Jane Smith"}</h3>
                <p className="text-sm">{index === 0 ? "Senior Engineer" : "Project Manager"}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
      <StatsSection />
    </>
  );
}