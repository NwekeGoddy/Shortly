import EstateManageLogo from "../../assets/Icons/EstateManageLogo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className=" px-6 py-4 sm:px-10 sm:py-8 ">
      {/* Mobile */}
      <div className="flex flex-row justify-between items-center sm:hidden ">
        <div className="w-8">
          <img src={EstateManageLogo} alt="EstateManageLogo" />
        </div>

        <p></p>
        <div className="flex items-center ">
          <div
            type="button"
            onClick={handleIsOpen}
            className="px-6 py-4 sm:px-10 sm:py-8 rounded-full flex items-center justify-between text-[#3a3053]"
          >
            <button className="flex items-center space-x-3 focus:outline-none">
              <div className="w-4 sm:w-6 flex items-center justify-center relative">
                <span
                  className={
                    "transform transition w-full  h-[2px] sm:h-[2px] bg-current absolute rounded-full" +
                    (isOpen ? " translate-y-0 rotate-45" : " -translate-y-2")
                  }
                ></span>

                <span
                  className={
                    "transform transition w-full h-[2px] sm:h-[2px] bg-current absolute rounded-full" +
                    (isOpen ? " opacity-0 -translate-x-3" : " opacity-100")
                  }
                ></span>

                <span
                  className={
                    "transform transition w-full h-[2px] sm:h-[2px] bg-current absolute rounded-full" +
                    (isOpen ? " translate-y-0 -rotate-45" : " translate-y-2")
                  }
                ></span>
              </div>
            </button>
          </div>

          <div className={"w-full" + (isOpen ? " block" : " hidden")}>
            <ul className="bg-white absolute left-0 top-20 flex-col w-full items-center sm:static flex sm:flex-row mr-12 gap-6 sm:gap-8 text-digiblue1 text-base md:text-lg font-medium">
              <li className="text-gray-300 hover:text-gray-600 w-full text-center border-b-4 border-[#EBF7FF] sm:border-0 pb-4 sm:pb-0">
                <AnchorLink href="#viewPayments">Check Payments</AnchorLink>
              </li>
              <li className="text-gray-300 hover:text-gray-600 w-full text-center border-b-4 border-[#EBF7FF] sm:border-0 pb-4 sm:pb-0">
                <AnchorLink href="#processPayments"> Pay Bills</AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex gap-10 items-center 2xl:max-w-7xl mx-auto sm:justify-between">
        <div className="w-14">
          <img src={EstateManageLogo} alt="EstateManageLogo" />
        </div>

        <div className="text-Gray flex  items-center gap-10">
          <AnchorLink href="#viewPayments">
            <button className="text-gray-300 hover:text-gray-600">
              Check Payments
            </button>
          </AnchorLink>
          <AnchorLink href="#processPayments">
            {" "}
            <button className="px-4 py-1 border rounded-full bg-Cyan hover:bg-cyan-500 text-white hover:text-cyan-100">
              Pay Bills
            </button>
          </AnchorLink>
        </div>
      </div>
    </section>
  );
}

export default Header;
