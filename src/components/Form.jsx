import ShortenDesktop from "../assets/Icons/bg-shorten-desktop.svg";
import ShortenMobile from "../assets/Icons/bg-boost-mobile.svg";
import { Formik } from "formik";

function Form() {
  return (
    <section className="px-6 py-4 sm:py-5 sm:px-10 2xl:max-w-7xl mx-auto 2xl:px-0">
      <div
        className="px-9 py-9 bg-LightPurple rounded-md"
        style={{ backgroundImage: `url(${ShortenDesktop})` }}
      >
        <Formik
          initialValues={{ email: ""}}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
             errors.email = "Please add a link"
            }else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
           
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
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
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Shorten a link here..."
                  className={"bg-white text-Gray w-full rounded-md px-4 py-2 outline-none " + (errors.email && touched.email && errors.email ? 'border-2 border-red-500 text-red-500' : '')}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
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
