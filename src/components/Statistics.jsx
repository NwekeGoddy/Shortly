import BrandRecognition from "../assets/Icons/icon-brand-recognition.svg";
import DetailedRecords from "../assets/Icons/icon-detailed-records.svg";
import FullyCustomizable from "../assets/Icons/icon-fully-customizable.svg";

function Statistics() {
  return (
    <div className="bg-gray-100">
      <section className="bg-gray-100  px-8 pt-16 pb-24 sm:pt-12 sm:pb-28 sm:px-10 2xl:max-w-7xl mx-auto 2xl:px-0">
        <div className="text-center mb-16 flex flex-col justify-start items-center">
          <h2 className="text-gray-700 text-xl font-bold md:text-3xl">
            Advanced Statistics
          </h2>
          <p className="my-2 text-gray-300 text-sm font-medium text-center md:max-w-xl sm:text-xl">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="flex flex-col text-center gap-5 text-black lg:flex-row ">

          {/* BrandRecognition */}
          <div className="mt-3 bg-white rounded-xl px-8 py-8 relative flex flex-col justify-center items-center z-20 lg:z-0">
            <div className="w-8 h-2 bg-cyan-400 absolute -right-8 hidden lg:block"></div>
            <div className="p-3 bg-LightPurple rounded-full absolute -top-7 lg:left-8 ">
              <img src={BrandRecognition} alt="icon-brand-recognition" />
            </div>
            <h2 className="my-4 font-bold text-gray-700 sm:text-2xl  lg:text-left lg:w-full">
              Brand Recognition
            </h2>
            <p className="my-2 text-gray-300 text-sm font-medium text-center sm:text-xl  lg:text-left">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          {/* DetailedRecords */}
          <div className="mt-3 bg-white rounded-xl px-8 py-8 relative flex flex-col justify-center items-center z-10 top-8">
            <div className="hidden w-8 h-2 bg-cyan-400 absolute -right-8 lg:block"></div>
            <div className="w-2 h-12 bg-cyan-400 absolute -top-16 lg:hidden"></div>

            <div className="p-3 bg-LightPurple rounded-full absolute -top-7 lg:left-8">
              <img src={DetailedRecords} alt="icon-brand-recognition" />
            </div>
            <h2 className="my-4 font-bold text-gray-700 sm:text-2xl lg:text-left lg:w-full">
              Detailed Records
            </h2>
            <p className="my-2 text-gray-300 text-sm font-medium text-center sm:text-xl lg:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          {/* FullyCustomizable */}
          <div className="mt-3 bg-white rounded-xl px-8 py-8 relative flex flex-col justify-center items-center z-0 lg:z-20 top-16">
            <div className="w-2 h-12 bg-cyan-400 absolute -top-16 lg:hidden"></div>
            <div className="p-3 bg-LightPurple rounded-full absolute -top-7 lg:left-8">
              <img src={FullyCustomizable} alt="icon-brand-recognition" className="w-10" />
            </div>
            <h2 className="my-4 font-bold text-gray-700 sm:text-2xl lg:text-left lg:w-full">
              Fully Customizable
            </h2>
            <p className="my-2 text-gray-300 text-sm font-medium text-center sm:text-xl lg:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Statistics;
