import ShortenDesktop from "../assets/Icons/bg-shorten-desktop.svg";
import ShortenMobile from "../assets/Icons/bg-boost-mobile.svg";
import { Formik } from "formik";
import axios from "axios";

function Form({ setAdded, Added }) {
  // const axios = require('axios');

  const baseURL = "https://api.shrtco.de/v2";

  return (
    <section className="px-6 py-4 sm:py-5 sm:px-10 2xl:max-w-7xl mx-auto 2xl:px-0">
      <div
        className="px-9 py-9 bg-LightPurple rounded-md"
        style={{ backgroundImage: `url(${ShortenDesktop})` }}
      >
        <Formik
          initialValues={{ link: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.link) {
              errors.link = "Please add a link";
            } else if (
              !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test(
                values.link
              )
            ) {
              errors.link = "Invalid link address";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            let value = JSON.stringify(values.link, null, 2);
            value = value.slice(1, -1);

            axios.post(`${baseURL}/shorten?url=${value}`).then((response) => {
              // alert(JSON.stringify(response.data.result.short_link2));

              const storedValue = {
                originalLink: response.data.result.original_link,
                shortLink: response.data.result.full_short_link2,
                copied: false
              };

              let internalLinks = JSON.parse(localStorage.getItem("links"))
                ? JSON.parse(localStorage.getItem("links"))
                : [];
              internalLinks.push(storedValue);
              localStorage.setItem("links", JSON.stringify(internalLinks));
              setAdded(!Added);
              values.link = "";
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-5"
            >
              <div className={"flex flex-col gap-2 w-full text-red-500"}>
                <input
                  type="text"
                  name="link"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.link}
                  placeholder="Shorten a link here..."
                  className={
                    "bg-white text-Gray w-full rounded-md px-4 py-2 outline-none " +
                    (errors.link && touched.link && errors.link
                      ? "border-2 border-red-500 text-red-500"
                      : "")
                  }
                />
                {errors.link && touched.link && errors.link}
              </div>
              <button
                type="submit"
                // disabled={isSubmitting}
                className="px-4 py-1 h-11 rounded-md bg-Cyan hover:bg-cyan-500 text-white whitespace-nowrap hover:text-cyan-100"
              >
                Shorten It!
              </button>
            </form>
          )}
        </Formik>
      </div>
      );
    </section>
  );
}

export default Form;
