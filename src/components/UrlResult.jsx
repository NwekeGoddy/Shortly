import { useState, useEffect } from "react";

const UrlResult = ({ setAdded, Added }) => {
  let internalLinks = JSON.parse(localStorage.getItem("links"))
    ? JSON.parse(localStorage.getItem("links"))
    : [];
  const [Links, setLinks] = useState([]);
  const [Button, setButton] = useState(false);

  useEffect(() => {
    setLinks(JSON.parse(localStorage.getItem("links")) || []);
    // console.log(Links)
  }, [Added]);

  return (
    <div className="bg-gray-100">
      <section className="mt-5 px-6 py-4 sm:py-5 sm:px-10 2xl:max-w-7xl mx-auto 2xl:px-0">
        {Links.map((props, index) => {
          return (
            <div
              key={index}
              className="mb-3 bg-white flex flex-col rounded-lg lg:flex-row lg:justify-between lg:items-center"
            >
              <div className="text-DarkViolet border-b-2 border-gray-100 lg:border-0">
                <p className="p-5 whitespace-nowrap  text-ellipsis overflow-hidden ...">
                  {props.originalLink}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <div className="text-Cyan p-5">
                  <p>{props.shortLink}</p>
                </div>
                <div className="px-5 pb-5 lg:py-5 ">
                  <button className=" px-4 py-1 h-11 rounded-md bg-Cyan hover:bg-cyan-500 text-white whitespace-nowrap hover:text-cyan-100 text-center w-full">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default UrlResult;
