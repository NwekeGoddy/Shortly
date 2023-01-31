import IllustrationWorking from "../assets/Icons/illustration-working.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <section className="px-6  py-4 sm:py-5 sm:px-10 2xl:max-w-7xl mx-auto 2xl:px-0">
      <div className=" flex flex-col-reverse gap-6 items-center sm:flex-row">
        <div className="flex justify-between items-center flex-col sm:items-start">
          <h2 className="text-gray-700 text-4xl font-black text-center  sm:text-left sm:text-6xl sm:leading-tight">
            More than just payment
          </h2>
          <p className="my-2 text-gray-300 text-sm font-medium text-center sm:text-left sm:text-xl">
            Simplifies payment processing and record-keeping for security, waste
            disposal, and other common charges.
          </p>
          <AnchorLink href="#processPayments">
            {" "}
            <button className="my-5 px-5 py-2 border rounded-full bg-Cyan hover:bg-cyan-500 text-white hover:text-cyan-100">
              Pay Bills
            </button>{" "}
          </AnchorLink>
        </div>
        <div>
          <img src={IllustrationWorking} alt="React Logo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
