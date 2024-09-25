import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { verify } from "../auth/authAction";

export default function Verify() {
  const location = useLocation();
  const navigate = useNavigate();

  // Ensure email has a default value
  const email = location?.state?.email || "";

  // Handle verification
  const handleVerify = async (values) => {
    try {
      const verifyRes = await verify(values);
      if (verifyRes.message) {
        toast.success(verifyRes.message);
        navigate("/login"); // Redirect after successful verification
      }
      if (verifyRes.error) {
        toast.error(verifyRes.error);
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <section className="flex justify-center mt-10">
      <div className="w-[40%] bg-slate-100 p-5 rounded-md">
        <Formik
          initialValues={{
            email: email, // Use the email from the location state
            otp_code: "",
          }}
          validationSchema={Yup.object({
            otp_code: Yup.string().required("OTP code is required"),
          })}
          onSubmit={(values) => {
            console.log("values", values);
            handleVerify(values);
          }}
        >
          <Form className="w-full bg-grey-100 px-6 rounded-md py-10 flex flex-col items-center">
            <div className="mb-5">
              <img
                className="mx-auto w-28 h-28"
                src="https://easyfound.automatex.dev/media/uploads/category_ab630169-5375-442c-8337-799aef502c64.png"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-semiBlue-500 text-header-4 font-bold">
                Check your email
              </h3>
              <p className="text-semiBlue-500 text-header-6 font-semibold">
                We sent a verification code to your email.
              </p>
            </div>
            <label
              htmlFor="otp_code"
              className="block my-3 text-sm font-medium text-grey-900"
            >
              OTP Code
            </label>
            <Field
              type="text"
              name="otp_code"
              id="otp_code"
              className="bg-grey-50 border border-grey-300 text-grey-900 text-price rounded-lg focus:border-semiBlue-500 block w-full p-2.5 dark:bg-grey-700 dark:border-grey-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-semiBlue-500"
              placeholder="Enter OTP Code"
            />
            <ErrorMessage
              name="otp_code"
              className="text-primary-600"
              component="div"
            />

            {/* Verify button */}
            <button
              type="submit"
              className="text-primary-600 mx-auto w-1/2 mt-5 border border-grey-300 hover:bg-green-600 focus:ring-2 focus:ring-blue-200 font-medium rounded-2xl text-lg px-5 py-2.5 hover:text-white dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Verify
            </button>
            {/* Back to login */}
            <button
              type="button"
              onClick={() => navigate("/login")} // Redirect to login
              className="text-primary-600 mx-auto w-1/2 mt-5 border border-grey-300 hover:bg-grey-600 focus:ring-2 focus:ring-blue-200 font-medium rounded-2xl text-lg px-5 py-2.5 hover:text-white dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Back to login
            </button>
          </Form>
        </Formik>
      </div>
      <ToastContainer />
    </section>
  );
}
