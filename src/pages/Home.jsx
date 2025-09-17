import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import Tag from "../components/Tag";
import Button from "../components/Button";
import RotatingBadge from "../components/RotatingBadge";
import HowWork from "../components/HowWork";

// Import all images from the public/home directory
const images = {
  star: "/home/star.png",
  home_main_img: "/home/home_main_img.png",
  experience: "/home/experience.svg",
  no_of_repairs: "/home/no_of_repairs.svg",
  exp_img_home: "/home/exp_img_home.jpg",
  exp_1: "/home/exp_1.jpg",
  exp_2: "/home/exp_2.jpg",
  exp_3: "/home/exp_3.jpg",
  exp_4: "/home/exp_4.jpg",
  about_us_img1: "/home/about_us_img1.jpg",
  about_us_img2: "/home/about_us_img2.jpg",
  aim: "/home/aim.svg",
  rocket: "/home/rocket.svg"
};

const experience_tags = [
  {
    exp: "15+",
    name: "Years of experience",
    svg_img: images.experience,
    bg_col: "white",
    text: "black",
  },
  {
    exp: "1000+",
    name: "Truck repaired",
    svg_img: images.no_of_repairs,
    bg_col: "black",
    text: "white",
  },
];

const experties_tags = [
  "Safety materials",
  "Premium Support",
  "Regular Maintenance Checks",
  "Eco-Friendly Solutions",
];

const experties_cards = [
  {
    img: images.exp_1,
    heading: "full truck inspection",
    description:
      "Engine is the heart of truck, and any issues can effect performance.",
  },
  {
    img: images.exp_4,
    heading: "truck trailer bushing",
    description:
      "High-quality truck trailer bushings for smoother rides on highways.",
  },
  {
    img: images.exp_3,
    heading: "air compressor",
    description:
      "Efficient air compressor solutions for trucks, ensuring consistent pressure and reliable operation.",
  },
  {
    img: images.exp_1,
    heading: "transmission change ",
    description:
      "Reliable transmission change services for smoother shifting and optimal truck performance.",
  },
];

const Home = () => {
  return (
    <main>
      <section className="flex flex-col py-[8%] px-[8%] gap-3 lg:gap-6 ">
        <div className="flex flex-col gap-6 md:flex-row-reverse justify-end items-start md:items-center lg:gap-10">
          <span>
            <img
              className="w-[10rem] md:w-[12rem] lg:w-[10rem] xl:w-[10rem]"
              src={images.star}
              alt=""
            />
          </span>
          <h1 className="text-6xl uppercase tracking-tighter text-black font-semibold max-sm:text-5xl lg:text-8xl xl:text-9xl">
            truck repair
          </h1>
        </div>
        <div className="flex flex-col justify-start items-start gap-5 lg:flex-row-reverse lg:justify-between lg:items-center">
          <h1 className="text-6xl whitespace-nowrap text-right uppercase tracking-tighter font-semibold text-red max-sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl ">
            <span className="text-black"> & </span>servicing
          </h1>
          <p className="text-md text-[#727272] md:text-left md:w-[50%] lg:w-[40%]">
            At INDY repair, we know that your truck is more than just a vehicle.
            It’s a hardworking partner that keeps your business moving every
            day.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden mt-16">
          <div className="relative h-[70vw] md:h-[100%] w-[100%] pb-20 rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={images.home_main_img}
              alt=""
            />
            <div className="absolute left-[50%] translate-x-[-50%] bottom-0">
              <RotatingBadge />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-3 justify-center items-center">
        <Tag text={"about our company"} />
        <h1 className="text-4xl px-[8%] max-w-[100%] font-semibold text-center text-black leading-tight tracking-tight lg:max-w-[75%] lg:text-5xl lg:leading-[1.3]">
          Transform your truck space into a sanctuary with fame & same company{" "}
          <span className="text-red">INDY</span>.
        </h1>
        <div className="px-[8%] py-[5%] flex flex-col gap-6 lg:flex-row ">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col border-[1.5px] border-[#F4F4F4] p-5 rounded-xl">
              <p className="text-gray-100 text-2xl py-4 mb-6">
                "Outstanding service & unmatched efficiency! They went above and
                beyond, arriving right on time and leaving my workspace
                spotless."
              </p>
              <span
                className="flex flex-col gap-2"
                style={{
                  borderImage: "linear-gradient(to right, #FF0000, #FFFFFF) 1",
                  borderTop: "0.09rem solid transparent",
                  paddingTop: "0.5rem",
                }}
              >
                <h3 className="text-xl pt-3 font-semibold">
                  Mr. Sattbeer Singh
                </h3>
                <h6 className="text-sm text-gray-100">Founder</h6>
              </span>
            </div>
            <div className="flex flex-col gap-4 md:flex-row justify-between">
              {experience_tags.map((item, index) => (
                <div
                  key={index}
                  className={`flex w-full justify-between items-center border-[1.5px] border-[#F4F4F4] p-5 rounded-xl bg-${item.bg_col}`}
                >
                  <span className="flex flex-col gap-3">
                    <h2 className={`text-4xl font-semibold text-${item.text}`}>
                      {item.exp}
                    </h2>
                    <p className="text-gray-100">{item.name}</p>
                  </span>
                  <div>
                    <img src={item.svg_img} alt="experience" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full rounded-xl overflow-hidden ">
            <img
              className="h-full w-full object-cover"
              src={images.exp_img_home}
              alt="home image"
            />
          </div>
        </div>
      </section>
      <section className="bg-black">
        <section className="p-[8%] py-[10%] lg:p-[5%] text-white flex flex-col gap-6 md:gap-12 md:flex-row">
          <div className="flex flex-col-reverse items-center justify-end lg:flex-row lg:gap-10 ">
            <div className="hidden lg:block w-[100%] lg:h-[33vw] overflow-hidden rounded-xl"><img className="w-full h-full object-cover" src={images.about_us_img1} alt="about1" /></div>
            <div className="flex flex-col gap-6 ">
              <span><Tag text={"about us"} /></span>
              <h2 className="text-4xl leading-tight font-semibold mb-3 md:text-5xl">Our America's #1 Truck and Trailer Repair Company</h2>
              <p className="text-gray-100">At INDY repair, we recognize that your truck is more than just a vehicle. It’s your daily work partner, your road companion, and a reflection of your commitment to getting the job done.</p>
              <span className="flex justify-start items-center"><Button variant="red" text="learn more" /></span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center gap-12 p-6 border-b-[1px] border-gray-100">
              <span className="flex flex-col gap-2 ">
                  <h4 className="text-2xl font-semibold">Our mission</h4>
                  <p className="text-gray-100 text-sm">have focused generating new known is a ledge.</p>
              </span>
              <span className="w-[20vw] md:w-[10vw]"><img className="w-full h-full object-cover" src={images.aim} alt="" /></span>
            </div>
            <div className="flex justify-between items-center gap-12 p-6 mb-6 md:mb-0">
              <span className="flex flex-col gap-2 ">
                  <h4 className="text-2xl font-semibold">Our vision</h4>
                  <p className="text-gray-100 text-sm">Concentration while creating new knowledge is an edge.</p>
              </span>
              <span className="w-[20vw] md:w-[10vw]"><img className="w-full h-full object-cover" src={images.rocket} alt="" /></span>
            </div>
            <div className="w-full h-[50vw] overflow-hidden rounded-xl md:h-[15vw]"><img className="w-full h-full object-cover" src={images.about_us_img2} alt="about2" /></div>
          </div>
        </section>
      </section>
      <section className="p-[8%] py-[5%] flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col gap-4 min-w-[40%]">
          <div>
            <Tag text={"our experties"} />
          </div>
          <h2 className="text-4xl font-semibold mb-3 md:text-5xl">
            Full-service package
          </h2>
          <p className="text-gray-100 mb-3 sm:max-w-[70%] lg:max-w-[100%]">
            At INDY repair, we understand that your truck is more than just a
            vehicle. It's your workhorse, your trusted partner on long hauls,
            and the backbone of your business operations.
          </p>
          <div className="flex flex-col gap-2 mb-3 lg:mb-10">
            {experties_tags.map((items, index) => (
              <div key={index} className="flex gap-3 items-center">
                <span className="border-[1px] border-[#dddddd] rounded-[100%] text-red text-2xl">
                  <IoIosCheckmark />
                </span>{" "}
                <span>{items}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-start"><Button variant="black" text="discover more" /></div>
        </div>
        <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {experties_cards.map((items, index) => (
            <div
              key={index}
              className="group h-full flex flex-col rounded-xl overflow-hidden hover:cursor-pointer hover:shadow-[0_8px_30px_10px_rgba(0,0,0,0.03),8px_0_30px_10px_rgba(0,0,0,0.03),-8px_0_30px_10px_rgba(0,0,0,0.03)] transition-all duration-500 ease-in-out"
            >
              <div className="w-full max-h-[50vw] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={items.img}
                  alt="experience"
                />
              </div>
              <div className="flex flex-col justify-between gap-4 p-6 border-[1px] rounded-b-xl border-[#dddddd]">
                <h3 className="capitalize text-xl font-semibold">
                  {items.heading}
                </h3>
                <p className="text-gray-100 text-sm">{items.description}</p>
                <a
                  className="text-red md:text-gray-100 text-sm font-semibold mt-7 group-hover:text-red transition-all duration-500 ease-in-out"
                  href=""
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-[8%] py-[5%] bg-[#F5F5F5] flex flex-col gap-14">
        <HowWork />
        <div className="p-[5%] pb-[10%] lg:p-[3%] flex flex-col lg:flex-row gap-10 bg-white rounded-xl">
          <div className="pt-[10%] lg:pt-[5%]">
            <Tag text="why choose us" />
            <h1 className="text-4xl font-semibold my-6 leading-[1.2]">
              We are the best option for complete truck care
            </h1>
            <p className="text-gray-100 mb-6">
              At INDY repair, we understand that your truck is more than just a
              vehicle. It’s your trusted companion, the partner that keeps your
              business moving forward.
            </p>
            <div className="flex flex-col gap-3 items-start">
              <span className="flex justify-start items-start gap-3">
                <span className="border-[1px] border-[#dddddd] rounded-[100%] text-red text-2xl">
                  <IoIosCheckmark />
                </span>
                <p>We handle your truck like it’s our own.</p>
              </span>
              <span className="flex justify-center items-center gap-3">
                <span className="border-[1px] border-[#dddddd] rounded-[100%] text-red text-2xl">
                  <IoIosCheckmark />
                </span>
                <p>Skilled professionals ensure top performance.</p>
              </span>
              <span className="flex justify-center items-center gap-3">
                <span className="border-[1px] border-[#dddddd] rounded-[100%] text-red text-2xl">
                  <IoIosCheckmark />
                </span>
                <p>Fast, thorough, and hassle-free care.</p>
              </span>
            </div>
          </div>
          <div className="w-full h-[80vw] md:h-[40vw] relative overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src={images.exp_img_home}
              alt="why choose us image"
            />{" "}
            <div className="absolute bottom-5 left-5"><Button variant="white" text="contact us" /></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
