import ShortlyLogo from "../assets/Icons/logo2.svg";
import { IconContext } from "react-icons";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


function Footer() {
  return (
    <section className="px-6 py-8 sm:py-8 sm:px-10 2xl:max-w-7xl mx-auto 2xl:px-0 bg-DarkViolet flex flex-col justify-center items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
      
      {/* Logo */}
      <div>
        <img fill="white" src={ShortlyLogo} alt="ShortlyLogo" />
      </div>

      {/* Footer Links */}
      <div className="flex flex-col justify-center items-center gap-2 text-center md:text-left md:flex-row md:items-start md:justify-start md:gap-12">
        <div>
          <h2 className="mb-3 font-bold">Features</h2>
          <ul>
            <li className="hover:text-cyan-600 pb-1">Link Shortening</li>
            <li className="hover:text-cyan-600 pb-1">Branded Links</li>
            <li className="hover:text-cyan-600 pb-1">Analytics</li>
          </ul>
        </div>
        <div >
          <h2 className="mb-3 font-bold">Reasources</h2>
          <ul>
            <li className="hover:text-cyan-600 pb-1">Blog</li>
            <li className="hover:text-cyan-600 pb-1">Developers</li>
            <li className="hover:text-cyan-600 pb-1">Support</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 font-bold">Company</h2>
          <ul>
            <li className="hover:text-cyan-600 pb-1">About</li>
            <li className="hover:text-cyan-600 pb-1">Our Team</li>
            <li className="hover:text-cyan-600 pb-1">Careers</li>
            <li className="hover:text-cyan-600 pb-1">Contact</li>
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
  );
}

export default Footer;
