import image from "../../public/logo.png";
import Button from "./Button";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="px-[8%] py-6 flex justify-between items-center font-sans">
        <div className="flex gap-14 items-center">
          <div className="w-[10rem] object-cover relative z-9">
            <img className="h-full w-full" src={image} alt="logo" />
          </div>
          <ul className="flex gap-14 justify-center items-center font-semibold uppercase text-sm max-lg:hidden ">
            <a
              className="hover:text-[#E81C2E] transition-all duration-500 ease-in-out"
              href="#"
            >
              Home
            </a>
            <a
              className="hover:text-[#E81C2E] transition-all duration-500 ease-in-out"
              href="#"
            >
              About
            </a>
            <a
              className="hover:text-[#E81C2E] transition-all duration-500 ease-in-out"
              href="#"
            >
              Services
            </a>
            <a
              className="hover:text-[#E81C2E] transition-all duration-500 ease-in-out"
              href="#"
            >
              FAQ
            </a>
          </ul>
        </div>
        <div className="flex gap-6 items-center max-lg:hidden">
          <span className="whitespace-nowrap text-[#E81C2E] font-semibold cursor-pointer hover:text-[#222222] transition-all duration-500 ease-in-out">
            +1 (317) 313-0713
          </span>
          <Button text={"contact us"} />
        </div>
        <div
          className="lg:hidden relative z-[9]"
          onClick={handleBurgerClick}
        >
          {isOpen ? (
            <RxCross1 className="cursor-pointer scale-[150%]"/>
          ) : (
            <RxHamburgerMenu className="cursor-pointer scale-[150%]"/>
          )}
        </div>
      </nav>
      <div
        className="lg:hidden h-[100vh] w-[50vw] absolute top-0 right-0 border-2 z-[8] flex justify-center items-center flex-col gap-10 transition-all duration-500 ease-in-out"
        style={{
          transform: isOpen ? "translateX(0%)" : "translateX(100%)",
        }}
      >
        <ul className="flex gap-7 justify-center items-center flex-col font-semibold uppercase text-2xl lg:hidden ">
          <a
            className="hover:text-[#E81C2E] transition-all duration-500 ease-in-out"
            href="#"
          >
            Home
          </a>
          <a
            className="hover:text-[#E81C2E] transition-all duration-500 ease-in-out"
            href="#"
          >
            About
          </a>
          <a
            className="hover:text-[#E81C2E] transition-all duration-500 ease-in-out"
            href="#"
          >
            Services
          </a>
          <a
            className="hover:text-[#E81C2E] transition-all duration-500 ease-in-out"
            href="#"
          >
            Contact
          </a>
          <a
            className="hover:text-[#E81C2E] transition-all duration-500 ease-in-out"
            href="#"
          >
            FAQ
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
