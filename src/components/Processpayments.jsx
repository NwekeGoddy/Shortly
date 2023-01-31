import ShortenDesktop from "../assets/Icons/bg-shorten-desktop.svg";
import ShortenMobile from "../assets/Icons/bg-boost-mobile.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PaystackPop from "@paystack/inline-js";
import * as Yup from "yup";
import axios from "axios";

function Processpayments({ setAdded, Added }) {
  return (
    <section id="processPayments" className="px-6 py-4 sm:py-5 sm:px-10 2xl:max-w-7xl mx-auto 2xl:px-0">
      <h2 className="text-gray-700 text-xl font-bold md:text-3xl text-center pb-5">
        Pay Bills Swiftly
      </h2>
      <div
        className="px-9 py-9 bg-LightPurple rounded-md"
        style={{ backgroundImage: `url(${ShortenDesktop})` }}
      >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            amount: "",
            metadata: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            amount: Yup.number("Enter a valid amount").required("Required"),
            metadata: Yup.string().required("Required"),
          })}
          onSubmit={(values, { resetForm }) => {
            const paystack = new PaystackPop();

            paystack.newTransaction({
              key: "pk_test_aba653f780012b13ab41f86259ba3b78557266ee",
              amount: values.amount * 100,
              email: values.email,
              firstname: values.firstName,
              lastname: values.lastName,
              metadata: { message: values.metadata },
              onSuccess(transaction) {
                resetForm({ values: "" });
              },
              onCancel() {
               ;
              },
            });
          }}
        >
          {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col text-black gap-4 items-center"
            >
              {/* First Name */}
              <div className="w-full">
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  className="bg-white text-Gray w-full rounded-md px-4 py-2 outline-none"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="pt-1 text-red-500">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>

              {/* Last Name */}
              <div className="w-full">
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  className="bg-white text-Gray w-full rounded-md px-4 py-2 outline-none"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="pt-1 text-red-500">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>

              {/* Email address */}
              <div className="w-full">
                <input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="bg-white text-Gray w-full rounded-md px-4 py-2 outline-none"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="pt-1 text-red-500">{formik.errors.email}</div>
                ) : null}
              </div>

              {/* Amount */}
              <div className="w-full">
                <input
                  id="amount"
                  type="text"
                  placeholder="Amount to pay"
                  className="bg-white text-Gray w-full rounded-md px-4 py-2 outline-none"
                  {...formik.getFieldProps("amount")}
                />
                {formik.touched.amount && formik.errors.amount ? (
                  <div className="pt-1 text-red-500">
                    {"Enter a valid amount"}
                  </div>
                ) : null}
              </div>

              {/*  metadata */}
              <div className="w-full">
                <input
                  id=" metadata"
                  type="text"
                  placeholder="Payment for security, waste or both ..."
                  className="bg-white text-Gray w-full rounded-md px-4 py-2 outline-none"
                  {...formik.getFieldProps("metadata")}
                />
                {formik.touched.metadata && formik.errors.metadata ? (
                  <div className="pt-1 text-red-500">
                    {"Enter a valid description"}
                  </div>
                ) : null}
              </div>

              <button
                type="submit"
                className="w-fit  my-3 px-5 py-2 rounded-full bg-Cyan hover:bg-cyan-500 text-white hover:text-cyan-100"
              >
                Pay Bill
              </button>
            </form>
          )}
        </Formik>
      </div>
      );
    </section>
  );
}

export default Processpayments;
