import image from "/home/logo.png";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Button from "./Button";
import { NavLink } from "react-router-dom";

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
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-all duration-500 ease-in-out hover:text-red ${isActive ? 'text-red' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-all duration-500 ease-in-out hover:text-red ${isActive ? 'text-red' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `transition-all duration-500 ease-in-out hover:text-red ${isActive ? 'text-red' : ''}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `transition-all duration-500 ease-in-out hover:text-red ${isActive ? 'text-red' : ''}`
              }
            >
              FAQ
            </NavLink>
          </ul>
        </div>
        <div className="flex gap-6 items-center max-lg:hidden">
          <span className="whitespace-nowrap text-red font-semibold cursor-pointer hover:text-black transition-all duration-500 ease-in-out">
            317-771-5095
          </span>
          <Button to="/contact" variant="black" text={"contact us"} />
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
        className={`lg:hidden h-[100vh] w-[50vw] fixed top-0 right-0 border-2 z-[8] flex justify-center items-center flex-col gap-10 transition-all duration-500 ease-in-out bg-white ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex gap-7 justify-center items-center flex-col font-semibold uppercase text-2xl lg:hidden ">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `transition-all duration-500 ease-in-out hover:text-red ${isActive ? 'text-red' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `transition-all duration-500 ease-in-out hover:text-red ${isActive ? 'text-red' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `transition-all duration-500 ease-in-out hover:text-red ${isActive ? 'text-red' : ''}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `transition-all duration-500 ease-in-out hover:text-red ${isActive ? 'text-red' : ''}`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/faq"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `transition-all duration-500 ease-in-out hover:text-red ${isActive ? 'text-red' : ''}`
            }
          >
            FAQ
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
