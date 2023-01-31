import ViewStatistics from "../assets/Icons/icon-brand-recognition.svg";
import { AiOutlineSafety } from "react-icons/ai";
import { GiNuclearWaste } from "react-icons/gi";

function Statistics() {
  return (
    <div className="bg-gray-100">
      <section className="bg-gray-100  px-8 pt-16 pb-24 sm:pt-12 sm:pb-28 sm:px-10 2xl:max-w-7xl mx-auto 2xl:px-0">
        <div className="text-center mb-16 flex flex-col justify-start items-center">
          <h2 className="text-gray-700 text-xl font-bold md:text-3xl">
            Easy Estate Managing 
          </h2>
          <p className="my-2 text-gray-300 text-sm font-medium text-center md:max-w-xl sm:text-xl">
          Comprehensive suite of tools for estate managers to manage payments, tenants, maintenance, financials, and communication efficiently..
          </p>
        </div>

        <div className="flex flex-col text-center gap-5 text-black lg:flex-row ">
          {/* View payments */}
          <div className="mt-3 bg-white rounded-xl px-8 py-8 relative flex flex-col justify-center items-center z-20 lg:z-0">
            <div className="w-8 h-2 bg-cyan-400 absolute -right-8 hidden lg:block"></div>
            <div className="p-3 bg-LightPurple rounded-full absolute -top-7 lg:left-8 ">
              <img src={ViewStatistics} alt="Statistics Icons" />
            </div>
            <h2 className="my-4 font-bold text-gray-700 sm:text-2xl  lg:text-left lg:w-full">
              View Payments
            </h2>
            <p className="my-2 text-gray-300 text-sm font-medium text-center sm:text-xl  lg:text-left">
              Gain insights on residents paid bills, making it easier to track
              payment and follow up residents who are behind
            </p>
          </div>

          {/*Security Bills */}
          <div className="mt-3 bg-white rounded-xl px-8 py-8 relative flex flex-col justify-center items-center z-10 top-8">
            <div className="hidden w-8 h-2 bg-cyan-400 absolute -right-8 lg:block"></div>
            <div className="w-2 h-12 bg-cyan-400 absolute -top-16 lg:hidden"></div>

            <div className="p-3 bg-LightPurple rounded-full absolute -top-7 lg:left-8">
              <AiOutlineSafety size="40px" color="#2acfcf" />
            </div>
            <h2 className="my-4 font-bold text-gray-700 sm:text-2xl lg:text-left lg:w-full">
              Security Bills
            </h2>
            <p className="my-2 text-gray-300 text-sm font-medium text-center sm:text-xl lg:text-left">
              Improve way by which residents can easily, quickly and securely pay their
              security bills online eliminating in-person payments.
            </p>
          </div>

          {/*Waste Bills */}
          <div className="mt-3 bg-white rounded-xl px-8 py-8 relative flex flex-col justify-center items-center z-0 lg:z-20 top-16">
            <div className="w-2 h-12 bg-cyan-400 absolute -top-16 lg:hidden"></div>
            <div className="p-3 bg-LightPurple rounded-full absolute -top-7 lg:left-8">
              <GiNuclearWaste size="40px" color="#2acfcf" />
            </div>
            <h2 className="my-4 font-bold text-gray-700 sm:text-2xl lg:text-left lg:w-full">
              Waste Bills
            </h2>
            <p className="my-2 text-gray-300 text-sm font-medium text-center sm:text-xl lg:text-left">
              Residents to pay their waste disposal bills in a convenient and
              secure manner with one of the best paymwnt platform avaliable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Statistics;
