import ShortlyLogo from "../assets/Icons/logo2.svg";
import { IconContext } from "react-icons";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


function Footer() {
  return (
    <div className="bg-DarkViolet" >
    <section className="px-6 py-8 sm:py-8 sm:px-10 2xl:max-w-7xl mx-auto 2xl:px-0 bg-DarkViolet flex flex-col justify-center items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
      
      {/* Logo */}
      <div>
        <img fill="white" src={ShortlyLogo} alt="ShortlyLogo" />
      </div>

      {/* Footer Links */}
      <div className="flex flex-col justify-center items-center gap-2 text-center md:text-left md:flex-row md:items-start md:justify-start md:gap-12">
        <div className="mb-2">
          <h2 className="mb-2  font-bold">Features</h2>
          <ul>
            <li className="hover:text-cyan-600 pb-1 cursor-pointer">Link Shortening</li>
            <li className="hover:text-cyan-600 pb-1 cursor-pointer">Branded Links</li>
            <li className="hover:text-cyan-600 pb-1 cursor-pointer">Analytics</li>
          </ul>
        </div>
        <div  className="mb-2">
          <h2 className="mb-2 font-bold">Reasources</h2>
          <ul>
            <li className="hover:text-cyan-600 pb-1 cursor-pointer">Blog</li>
            <li className="hover:text-cyan-600 pb-1 cursor-pointer">Developers</li>
            <li className="hover:text-cyan-600 pb-1 cursor-pointer">Support</li>
          </ul>
        </div>
        <div className="mb-2">
          <h2 className="mb-2 font-bold">Company</h2>
          <ul>
            <li className="hover:text-cyan-600 pb-1 cursor-pointer">About</li>
            <li className="hover:text-cyan-600 pb-1 cursor-pointer">Our Team</li>
            <li className="hover:text-cyan-600 pb-1 cursor-pointer">Careers</li>
            <li className="hover:text-cyan-600 pb-1 cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>

{/* Social Links */}
      <div className="flex gap-3">
      <div className="">
          <IconContext.Provider
            value={{ className: "text-xl text-Gray hover:text-cyan-600" }}
          >
            <FaFacebookSquare />
          </IconContext.Provider>
        </div>
        <div className="">
          <IconContext.Provider
            value={{ className: "text-xl text-Gray hover:text-cyan-600" }}
          >
            <FaTwitter />
          </IconContext.Provider>
        </div>
        <div className="">
          <IconContext.Provider
            value={{ className: "text-xl text-Gray hover:text-cyan-600" }}
          >
            <FaPinterest />
          </IconContext.Provider>
        </div>
        <div className="">
          <IconContext.Provider
            value={{ className: "text-xl text-Gray hover:text-cyan-600" }}
          >
            <FaInstagramSquare />
          </IconContext.Provider>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Footer;
