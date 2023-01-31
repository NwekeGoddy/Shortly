import ShortenDesktop from "../assets/Icons/bg-shorten-desktop.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Boost() {
  return (
    <section
      className=" py-5 bg-LightPurple flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${ShortenDesktop})` }}
    >
      <h1 className="text-base  sm:text-lg font-bold md:text-3xl">
        Waste & Security Bills Just Got Easier
      </h1>
      <div className=" flex flex-row gap-5">
        <AnchorLink href="#processPayments">
          <button className="my-3 px-5 py-2 rounded-full bg-Cyan hover:bg-cyan-500 text-white hover:text-cyan-100">
            Pay bills
          </button>
        </AnchorLink>
        <AnchorLink href="#viewPayments">
          <button className="my-3 px-5 py-2 rounded-full bg-DarkViolet hover:bg-black text-white hover:text-cyan-100">
            View Payments
          </button>
        </AnchorLink>
      </div>
    </section>
  );
}

export default Boost;
