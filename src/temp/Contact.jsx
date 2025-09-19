import React from 'react';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import ContactForm from '../components/ContactForm';
import { toast } from 'react-toastify';
import BannerSection from '../components/BannerSection';
import Tag from '../components/Tag';

const Contact = () => {
  const handlePhoneClick = (e) => {
    if (!/Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent)) {
      e.preventDefault();
      toast.info(
        'Calling is not supported on this device. Please use a mobile phone to call +1 (317) 313-0713.'
      );
    }
  };

  return (
    <>
    <BannerSection/>
    <div className="w-full">
      {/* Wrapper that changes layout based on screen size */}
      <div className="flex flex-col w-full relative">
        {/* Google Map Section */}
        <div className="relative w-full h-[450px] md:h-[700px]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.704913903276!2d-86.1125263!3d39.5795461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b63b3fbecbf1f%3A0xb4bc7058fc2e8df3!2s2965%20Heirloom%20Ln%2C%20Greenwood%2C%20IN%2046143%2C%20USA!5e0!3m2!1sen!2sin!4v1726337200000"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>

        {/* Contact Info Card */}
        <div
          className="
            w-full md:w-[520px] 
            bg-[#fffcfc] bg-opacity-80 
            p-12 rounded-lg shadow-sm md:shadow-md 
            transition-all duration-300 
            md:absolute md:top-[20%] md:right-28 z-10 
          "
        >
          <div className="pb-5"><Tag text="Get inspection" /></div>

          <div className="space-y-8 mt-[20px]">
            {/* Phone */}
            <a
              href="tel:+13173130713"
              onClick={handlePhoneClick}
              className="flex items-center group cursor-pointer"
            >
              <div
                className="
                  bg-red-100 rounded-lg p-3 mr-4 border border-[#c0bdbd] 
                  transition duration-300 group-hover:border-red group-hover:bg-red-200
                "
              >
                <FiPhone className="w-6 h-6 text-red transition duration-300 group-hover:text-[#E81C2E]" />
              </div>
              <div className='flex items-start gap-3 flex-col'>
                <p className="font-inter font-medium text-[12px] leading-[12px] text-[#555454] uppercase">Phone Number</p>
                <span className="font-inter font-semibold text-[16px] leading-[22px] transition-colors duration-200 group-hover:text-[#E81C2E]">
                317-771-5095
                </span>
              </div>
            </a>

            {/* Office Address */}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center group cursor-pointer"
            >
              <div
                className="
                  bg-red-100 rounded-lg p-3 mr-4 border border-[#c0bdbd] 
                  transition duration-300 group-hover:border-red group-hover:bg-red-200
                "
              >
                <FiMapPin className="w-6 h-6 text-red transition duration-300 group-hover:text-[#E81C2E]" />
              </div>
              <div className='flex items-start gap-3 flex-col'>
                <p className="font-inter font-medium text-[12px] leading-[12px] text-[#555454] uppercase">Office Address</p>
                <span className="font-inter font-semibold text-[16px] leading-[22px] transition-colors duration-200 group-hover:text-[#E81C2E]">
                  2965 Heirloom Lane, Greenwood, IN 46143
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:indyrepairshop@yahoo.com"
              className="flex items-center group cursor-pointer"
  
            >
              <div
                className="
                  bg-red-100 rounded-lg p-3 mr-4 border border-[#c0bdbd] 
                  transition duration-300 group-hover:border-red group-hover:bg-red-200
                "
              >
                <FiMail className="w-6 h-6 text-red transition duration-300 group-hover:text-[#E81C2E]" />
              </div>
              <div className='flex items-start gap-3 flex-col'>
                <p className="font-inter font-medium text-[12px] leading-[12px] text-[#555454] uppercase">Email Address</p>
                <span className="font-inter font-semibold text-[16px] leading-[22px] transition-colors duration-200 group-hover:text-[#E81C2E]">
                  indyrepairshop@yahoo.com
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <ContactForm/>

    </>
  );
};

export default Contact;
