import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";


const UrlResult = ({ setAdded, Added }) => {
  const [spinner, setSpinner] = useState(false);
  const [linktoCSV, setLinktoCSV] = useState("");
  const [payedResidents, setPayedResidents] = useState([]);

  const url = "https://api.paystack.co/transaction";
  const urlExport = "https://api.paystack.co/transaction/export";

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization:
            "Bearer" + " sk_test_b2430d1f7d48840a03e9891fc1dfa06737f9939f",
        },
      })
      .then((response) => {
        setPayedResidents(response.data.data);
        setSpinner(true);
      });
  }, []);

  useEffect(() => {
    axios
      .get(urlExport, {
        headers: {
          Authorization:
            "Bearer" + " sk_test_b2430d1f7d48840a03e9891fc1dfa06737f9939f",
        },
      })
      .then((response) => {
        setLinktoCSV(response.data.data.path);
      });
  }, []);

  return (
    <section className="mt-5 px-6 py-4 sm:py-5 sm:px-10 2xl:max-w-7xl mx-auto 2xl:px-0 w-full">
      {spinner ? (
        <div>
          {payedResidents.map((props, index) => {
            return (
              <div
                key={index}
                className="mb-3 bg-white flex flex-col rounded-lg md:flex-row md:justify-between md:items-center "
              >
                <div className="text-DarkViolet border-b-2 border-gray-100 md:border-0">
                  <p className="pt-5 px-5 whitespace-nowrap  text-ellipsis overflow-hidden ...">
                    {props.customer.first_name} {props.customer.last_name}
                  </p>
                  <p className="pb-5 px-5 whitespace-nowrap  text-ellipsis overflow-hidden ...">
                    {props.customer.email}
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center ">
                  <div className="text-Cyan flex flex-col lg:items-end">
                    <p className="pt-5 px-5 ">{props.metadata.message}</p>
                    <p className="pb-5 px-5 ">₦{props.amount / 100}:00</p>
                  </div>
                  <div className="px-5 pb-5 lg:py-5 "></div>
                </div>
              </div>
            );
          })}
          <div className="my-5">
            <a
              href={linktoCSV}
              className="my-3 px-5 py-2 rounded-full bg-DarkViolet hover:bg-black text-white hover:text-cyan-100"
            >
              Download Payment CSV
            </a>
          </div>
        </div>
      ) : (
        <div className="flex items-end justify-center">
          <Spinner />
        </div>
      )}
    </section>
  );
};

export default UrlResult;
