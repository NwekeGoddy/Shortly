import { useState, useEffect } from "react";

const UrlResult = ({ setAdded, Added }) => {
  let CopiedValue;

  const [Links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(JSON.parse(localStorage.getItem("links")) || []);
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
                  <button
                    onClick={() => {
                      
                      let internalLinks = JSON.parse(localStorage.getItem("links"))
                      internalLinks[index].copied = true;
                      localStorage.setItem("links", JSON.stringify(internalLinks));
                     

                      navigator.clipboard.writeText(props.shortLink);
                      
                      // CopiedValue = JSON.parse(localStorage.getItem("links"))
                      // CopiedValue = CopiedValue[index].copied

                      // alert(JSON.stringify(CopiedValue))
                      setAdded(!Added);

                      
                      
                    }}
                    className={props.copied ? "bg-LightPurple px-4 py-1 rounded-md h-11 text-center w-full" : "bg-Cyan" + " px-4 py-1 h-11 rounded-md bg-Cyan hover:bg-cyan-500 text-white whitespace-nowrap hover:text-cyan-100 text-center w-full" }
                  >
                    {props.copied ? "Copied!" : "Copy"}
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


//https://9qr.de/PYozUy
export default UrlResult;
