import React from "react";
import ButtonRed from "./ButtonRed";
import { GoMail } from "react-icons/go";
import logo_white from "../../public/logo_white.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const social = [
  <FaXTwitter/>,
  <FaFacebook/>,
  <FaInstagram/>,
  <FaLinkedinIn/>,
]
const links = [
  "Home",
  "About",
  "Services",
  "Contact",
]
const full_truck_inspection = [
  "Transmission change",
  "Truck trailer bushing",
  "Engine oil change",
  "Steel and Aluminium welding",
  "Air compressor",
]
const questions = [
  { icon: <FaPhoneAlt/>, que: "+1 (317) 313-0713" },
  { icon: <MdMailOutline/>, que: "INDYREPAIRSHOP@YAHOO.COM" },
  { icon: <IoMdTime/>, que: "Weekdays 10:00 am - 9:00 pm (EST)" },
]

const Footer = () => {
  return (
    <footer className="bg-black pt-[8%] px-[8%] text-gray-100 overflow-y-hidden">
      <div className="mb-20 flex flex-col justify-center items-start gap-[3rem] lg:flex-row lg:items-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-white2 tracking-tight text-left max-w-2xl">
          Get every single updates weekly from us.
        </h1>
        <form className="w-full max-w-xl">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="relative flex-grow">
              <GoMail className="text-gray-100 absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5" />
              <input
                type="email"
                placeholder="Business email"
                className="w-full pl-10 pr-4 py-3 bg-transparent border-b border-gray-100 text-gray-100 focus:outline-none"
              />
            </div>
            <div className="w-full sm:w-auto">
              <ButtonRed text="Subscribe" arrow={true} className="w-full" />
            </div>
          </div>
        </form>
      </div>
      <div className="mb-[7rem] flex justify-between items-start max-lg:flex-col max-lg:gap-12 w-full ">
        <div className="lg:basis-[35%] flex flex-col gap-6">
          <div className="w-[15rem]">
            <img className="h-full w-full object-cover" src={logo_white} alt="logo" />
          </div>
          <p className="leading-relaxed">
            Your truck is more than just a means of transportation <br />—it’s an
            essential asset that powers your business and livelihood. <br /> Regular
            truck servicing is crucial…
          </p>
          <div className="flex gap-2.5">
            {social.map((item, index) => (
              <span className="p-4 text-white bg-[#2F2F2F] rounded-lg hover:bg-red transition-all duration-300 ease-in-out" key={index}>{item}</span>
            ))}
          </div>
        </div>
        <div className="flex justify-between lg:justify-between gap-12 lg:w-[60%] w-full max-md:flex-col ">
          <div className="flex flex-col gap-4 h-full mt-[3%]">
            <h3 className="text-lg font-semibold whitespace-nowrap">Useful Links</h3>
            <ul>
              {links.map((item, index) => (
                <li className="mb-2 hover:text-white transition-all duration-300 ease-in-out" key={index}> <a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 h-full mt-[3%]">
            <h3 className="text-lg font-semibold">Full Truck Inspection</h3>
            <ul>
              {full_truck_inspection.map((item, index) => (
                <li className="mb-2 hover:text-white transition-all duration-300 ease-in-out" key={index}> <a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 h-full mt-[3%]">
            <h3 className="text-lg font-semibold">Have General Questions?</h3>
            <ul>
              {questions.map((item, index) => (
                <li className="mb-2 flex gap-2 items-center hover:text-white transition-all duration-300 ease-in-out" key={index}>
                  <a href="#">{item.icon}</a>
                  <a href="#">{item.que}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="border-t-[1.3px] border-[#2D2D2D] flex justify-center text-center p-5 text-white2 text-md">
          <p>Copyright & design by @Alchemy Studios - 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
