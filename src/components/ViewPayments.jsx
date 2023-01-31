import ShortenDesktop from "../assets/Icons/bg-shorten-desktop.svg";
import ShortenMobile from "../assets/Icons/bg-boost-mobile.svg";
import UrlResult from "./UrlResult";
import { useState, useEffect } from "react";

function ViewPayments() {
  const [showPayments, setShowPayments] = useState(false);

  const handleShowPayments = () => {
    setShowPayments(!showPayments);
  };

  return (
    <div id="viewPayments" className="bg-gray-100">
      <section className="px-6 py-4 sm:py-5 sm:px-10 2xl:max-w-7xl mx-auto 2xl:px-0">
        <div className="flex flex-col">
          <h2 className="text-gray-700 text-xl font-bold md:text-3xl text-center pb-5">
            View Payments
          </h2>

          {showPayments ? (
            <div>
              <UrlResult />
            </div>
          ) : null}
          <div className=" mx-auto">
    <button
            type="submit"
            className="w-fit  my-3 px-5 py-2 rounded-full bg-Cyan hover:bg-cyan-500 text-white hover:text-cyan-100"
            onClick={handleShowPayments}
          >
            {showPayments ? "Close Payments" : "Click to View"}
          </button>
          </div>
         
        </div>
        );
      </section>
    </div>
  );
}

export default ViewPayments;
