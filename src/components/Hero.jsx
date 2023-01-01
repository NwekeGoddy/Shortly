import IllustrationWorking from "../assets/Icons/illustration-working.svg";

function Hero() {
  return (
    <section className="px-6  py-4 sm:py-5 sm:px-10 2xl:max-w-7xl mx-auto 2xl:px-0">
      <div className=" flex flex-col-reverse gap-6 items-center sm:flex-row">
        <div className="flex justify-between items-center flex-col sm:items-start">
          <h2 className="text-gray-700 text-4xl font-black text-center  sm:text-left sm:text-6xl sm:leading-tight">More than just shorter links</h2>
          <p className="my-2 text-gray-300 text-sm font-medium text-center sm:text-left sm:text-xl">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="my-5 px-5 py-2 border rounded-full bg-Cyan hover:bg-cyan-500 text-white hover:text-cyan-100">
            Get Started
          </button>
        </div>
        <div>
            <img src={IllustrationWorking} alt="React Logo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
