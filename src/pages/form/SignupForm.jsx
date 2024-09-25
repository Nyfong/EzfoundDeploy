import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../auth/register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Logo1 from "../../assets/img/LogoCP1.png";
import Lottie from "lottie-react";
import animationData from "../../components/animations/signup.json";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function SignUpForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const regex = /^.{5,}$/;

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .matches(
        regex,
        "Password must contain at least 5 characters, one uppercase, one lowercase, one number, and one special character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleRegister = async (values) => {
    try {
      const registerData = await register(values);
      if (registerData?.status) {
        toast.error(registerData.message);
      } else {
        toast.success(registerData.message);
        navigate("/verify", { state: { email: values.email } });
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>SignUp</title>
          <meta
            name="description"
            content="Welcome to Easy Found, Cambodia’s premier service listing platform! Explore a wide range of trusted local services, from restaurants to repair shops, all in one place. Let Easy Found connect you to what you need with just a few clicks!"
          />
          <meta
            name="keywords"
            content="service listing, Cambodia, local services, restaurants, repair shops"
          />
          <meta name="author" content="Easy Found" />
          <link rel="canonical" href="https://easyfound-cstad.vercel.app/" />
          <meta
            property="og:title"
            content="Easy Found - Cambodia's Premier Service Listing Platform"
          />
          <meta
            property="og:description"
            content="Explore trusted local services, from restaurants to repair shops, all in one place!"
          />
          <meta
            property="og:url"
            content="https://easyfound-cstad.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://easyfound.automatex.dev/media/uploads/category_0a492b09-90d5-4a29-b21c-944f54693dab.png"
          />
        </Helmet>
        <section className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl min-w-80 mx-auto">
          {/* Animation Section */}
          <div className=" hidden md:flex items-center justify-start">
            <Lottie
              animationData={animationData}
              className="h-[500px] pt-10"
              loop={true}
            />
          </div>
          {/* form */}
          <div className="">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log("values", values);
                handleRegister(values);
                resetForm();
              }}
            >
              <Form className="flex w-full h-screen flex-col items-center bg-white p-5 rounded-md shadow-lg">
                <div className="w-full flex justify-center items-center mb-4">
                  <img
                    className="w-24 object-contain"
                    src="https://easyfound.automatex.dev/media/uploads/category_a99aa9d3-3ac8-4156-9cc2-0d677847f082.png"
                    alt="Signup Image"
                  />
                </div>
                <h1 className="font-pacifico text-3xl font-semibold text-center text-primary-600">
                  Create an Account
                </h1>
                <p className="text-gray-600 mt-2 text-center">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-primary-600 underline"
                  >
                    Log in
                  </Link>
                </p>

                {/* Username */}
                <div className="mt-5 w-full">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Username
                  </label>
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your profile name"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                {/* Email */}
                <div className="mt-5 w-full">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your email address"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                {/* Password */}
                <div className="mt-5 relative w-full">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-2 text-sm text-gray-500"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                {/* Confirm Password */}
                <div className="mt-5 relative w-full">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <Field
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2 top-2 text-sm text-gray-500"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                {/* Sign Up Button */}
                <button
                  type="submit"
                  className="cursor-pointer mt-10 text-white font-bold relative text-[14px] w-full h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
                >
                  Sign Up
                </button>

                {/* Logo */}
                <div className="font-poppins mt-10 flex items-center">
                  <Link to="/">
                    <img src={Logo1} alt="Logo" className="w-16 h-16" />
                  </Link>
                  <span className="font-pacifico">Easy Found</span>
                </div>
              </Form>
            </Formik>
          </div>
          {/* animation phone responsive */}
          <div className=" flex items-center justify-start md:hidden ">
            <Lottie
              animationData={animationData}
              className="h-[500px] pt-10"
              loop={true}
            />
          </div>
        </section>
      </HelmetProvider>
      <ToastContainer />
    </>
  );
}
