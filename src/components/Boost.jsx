import ShortenDesktop from "../assets/Icons/bg-shorten-desktop.svg";

function Boost() {
    return ( 
        <section   className=" py-5 bg-LightPurple flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${ShortenDesktop})` }}>
            <h1 className="text-lg font-bold md:text-3xl">Boost your links today</h1>
            <button className="my-3 px-5 py-2 rounded-full bg-Cyan hover:bg-cyan-500 text-white hover:text-cyan-100">
            Get Started
          </button>
        </section>
     );
}
 
export default Boost;