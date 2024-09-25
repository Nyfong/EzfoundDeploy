import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../auth/authAction"; // Correct path
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Logo1 from "../../assets/img/LogoCP1.png";
export default function SignUpForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const initialValues = {
    username: "",
    email: "",
    password: "Qwer1234@",
    confirmPassword: "Qwer1234@",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("username is required"),
    email: Yup.string().email("email is invalid").required("email is required"),
    password: Yup.string()
      .matches(
        regex,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
      )
      .required("password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("confirm password is required"),
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
      <section className="flex flex-col md:flex  items-center justify-center my-3 ">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("values", values);
            handleRegister(values);
            resetForm();
          }}
        >
          <Form className="flex w-full md:w-1/2  flex-col  items-center md:flex  bg-grey-100 p-0 md:p-5 rounded-md">
            <div className="w-full flex justify-center items-center">
              <img
                className="w-full object-contain h-[100px]"
                src="https://easyfound.automatex.dev/media/uploads/category_a99aa9d3-3ac8-4156-9cc2-0d677847f082.png"
                alt="Login Image"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
              <h1 className="font-pacifico text-3xl font-semibold text-center text-primary-600">
                Create an account
              </h1>
              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-poppins text-primary-600 font-semibold underline underline-offset-1"
                  >
                    Log in
                  </Link>
                </p>
              </div>

              {/* Username */}
              <div className="mt-5 font-poppins">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  What should we call you?
                </label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-grey-300 text-grey-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your profile name"
                />
                <ErrorMessage
                  name="username"
                  className="text-primary-600"
                  component="div"
                />
              </div>

              {/* Email */}
              <div className="mt-5 font-poppins">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  What is your Email?
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-grey-300 text-grey-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email address"
                />
                <ErrorMessage
                  name="email"
                  className="text-primary-600"
                  component="div"
                />
              </div>

              {/* Password */}
              <div className="mt-5 relative font-poppins">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Create a password
                </label>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-grey-300 text-grey-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Password"
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
                  className="text-primary-600"
                  component="div"
                />
              </div>

              {/* Confirm Password */}
              <div className="mt-5 relative font-poppins">
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm your password
                </label>
                <Field
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  className="bg-gray-50 border border-grey-300 text-grey-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Confirm Password"
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
                  className="text-primary-600"
                  component="div"
                />
              </div>

              {/* Sign up button */}

              <button
                type="button"
                className="cursor-pointer mt-10 text-white font-bold relative text-[14px] w-full h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
              >
                Sign up
              </button>
              {/* easyfound */}
              <div className=" font-poppins mt-10 flex items-center font-poppins">
                <Link to="/">
                  <img src={Logo1} alt="" className="w-16 h-16" />
                </Link>
                <span className="font-pacifico"> Easy Found</span>
              </div>
            </div>

            {/* <ToastContainer /> */}
          </Form>
        </Formik>
      </section>
      <ToastContainer />
    </>
  );
}
