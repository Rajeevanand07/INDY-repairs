import image from "../../public/logo.png"
import Button from "./Button"
const Navbar = () => {
  return (
    <>
        <nav className="px-[8%] py-6 flex justify-between items-center font-sans">
            <div>
                <ul className="flex gap-14 justify-center items-center font-semibold uppercase text-sm">
                    <div className="w-[10rem] object-cover "><img className="h-full w-full" src={image} alt="logo" /></div>
                    <a className="hover:text-[#E81C2E] transition-all duration-500 ease-in-out" href="#">Home</a>
                    <a className="hover:text-[#E81C2E] transition-all duration-500 ease-in-out" href="#">About</a>
                    <a className="hover:text-[#E81C2E] transition-all duration-500 ease-in-out" href="#">Services</a>
                    <a className="hover:text-[#E81C2E] transition-all duration-500 ease-in-out" href="#">FAQ</a>
                </ul>
            </div>
            <div className="flex gap-6 items-center">
                <span className="whitespace-nowrap text-[#E81C2E] font-semibold cursor-pointer hover:text-[#222222] transition-all duration-500 ease-in-out">+1 (317) 313-0713</span>
                <Button text={"contact us"}/>
            </div>
        </nav>
    </>
  )
}

export default Navbar