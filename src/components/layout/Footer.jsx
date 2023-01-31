import EstateManageLogo from "../../assets/Icons/EstateManageLogo.png";
import { IconContext } from "react-icons";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  return (
    <div className="bg-DarkViolet">
      <section className="px-6 py-8 sm:py-8 sm:px-10 2xl:max-w-7xl mx-auto 2xl:px-0 bg-DarkViolet flex flex-col justify-center items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
        {/* Logo */}
        <div className="w-14">
          <img fill="white" src={EstateManageLogo} alt="EstateManageLogo" />
        </div>

        {/* Footer Links */}
        <div className="flex flex-col justify-center items-center gap-2 text-center md:text-left md:flex-row md:items-start md:justify-start md:gap-12">
          <div className="mb-2">
            <h2 className="mb-2  font-bold">Features</h2>
            <ul>
              <AnchorLink href="#processPayments">
                <li className="hover:text-cyan-600 pb-1 cursor-pointer">
                  Security Bills
                </li>
              </AnchorLink>
              <AnchorLink href="#processPayments">
                <li className="hover:text-cyan-600 pb-1 cursor-pointer">
                  Waste Bills
                </li>
              </AnchorLink>
              <AnchorLink href="#viewPayments">
                <li className="hover:text-cyan-600 pb-1 cursor-pointer">
                  View Payments
                </li>
              </AnchorLink>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          <a
            className=""
            href="https://www.linkedin.com/in/nweke-chidi-a0aa251a5/"
            target="_blank"
          >
            <IconContext.Provider
              value={{ className: "text-xl text-Gray hover:text-cyan-600" }}
            >
              <BsLinkedin />
            </IconContext.Provider>
          </a>
          <a
            className=""
            href="https://www.facebook.com/chidi.nweke.735/"
            target="_blank"
          >
            <IconContext.Provider
              value={{ className: "text-xl text-Gray hover:text-cyan-600" }}
            >
              <FaFacebookSquare />
            </IconContext.Provider>
          </a>
          <a
            className=""
            href="https://twitter.com/NwekeChidi_G"
            target="_blank"
          >
            <IconContext.Provider
              value={{ className: "text-xl text-Gray hover:text-cyan-600" }}
            >
              <FaTwitter />
            </IconContext.Provider>
          </a>
          <a
            className=""
            href="https://nwekechidi.netlify.app/"
            target="_blank"
          >
            <IconContext.Provider
              value={{ className: "text-xl text-Gray hover:text-cyan-600" }}
            >
              <BsGlobe />
            </IconContext.Provider>
          </a>
          <a
            className=""
            href="https://www.instagram.com/iam_ngoddy/"
            target="_blank"
          >
            <IconContext.Provider
              value={{ className: "text-xl text-Gray hover:text-cyan-600" }}
            >
              <FaInstagramSquare />
            </IconContext.Provider>
          </a>
        </div>
      </section>

      <div className="text-cyan-100 px-8 pb-8 flex text-center items-center justify-center text-sm sm:text-lg">
        &copy; 2023 All right reserved, Designed and Built by Nweke Chidi
      </div>
    </div>
  );
}

export default Footer;
