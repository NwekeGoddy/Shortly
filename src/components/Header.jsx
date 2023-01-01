import ShortlyLogo from "../assets/Icons/logo.svg";
import { IconContext } from "react-icons";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className=" px-6 py-4 sm:px-10 sm:py-8 ">
      {/* Mobile */}
      <div className="flex justify-between items-center sm:hidden ">
        <div>
          <img src={ShortlyLogo} alt="ShortlyLogo" />
        </div>
        <div className="">
          <IconContext.Provider
            value={{ className: "text-4xl text-Gray hover:text-DarkViolet" }}
          >
            <HiMenu />
          </IconContext.Provider>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex gap-10 items-center 2xl:max-w-7xl mx-auto">
        <div>
          <img src={ShortlyLogo} alt="ShortlyLogo" />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className=" flex justify-between items-center gap-6 ">
            <Link className="text-gray-300 hover:text-gray-600">Features</Link>
            <Link className="text-gray-300 hover:text-gray-600">Pricing</Link>
            <Link className="text-gray-300 hover:text-gray-600">Resources</Link>
          </div>

          <div className="text-Gray flex justify-between items-center gap-6">
            <button className="text-gray-300 hover:text-gray-600">Login</button>
            <button className="px-4 py-1 border rounded-full bg-Cyan hover:bg-cyan-500 text-white hover:text-cyan-100">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
