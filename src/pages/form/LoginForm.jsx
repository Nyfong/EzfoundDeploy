import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../auth/authAction"; // Ensure this is defined
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Logo1 from "../../assets/img/LogoCP1.png";
export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleLogin = async (values) => {
    try {
      const loginRes = await login(values);
      console.log("Login Response:", loginRes); // Debugging line

      if (loginRes.access) {
        toast.success("Login Successfully");
        navigate("/");
      } else if (loginRes.message) {
        toast.error(loginRes.message);
      }
    } catch (error) {
      console.error("Login error:", error); // Catch any unexpected errors
      toast.error("An error occurred during login.");
    }
  };

  return (
    <>
      <section className="flex justify-center my-3">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Email is invalid")
              .required("Email is required"),
            password: Yup.string()
              .matches(
                regex,
                "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
              )
              .required("Password is required"),
          })}
          onSubmit={(values, { resetForm }) => {
            handleLogin(values);
            resetForm();
            console.log("values", values);
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
              <h3 className="font-pacifico text-primary-600 text-center py-3 font-semibold text-header-3">
                Log in
              </h3>

              {/* Email */}
              <div className="mt-3 font-poppins">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-grey-300 text-grey-900 text-sm rounded-lg focus:ring-semiBlue-500 focus:border-semiBlue-500 block w-full p-2.5 dark:text-white dark:focus:ring-semiBlue-500 dark:focus:border-semiBlue-500"
                  placeholder="name@gmail.com"
                />
                <ErrorMessage
                  name="email"
                  className="text-primary-600"
                  component="div"
                />
              </div>

              {/* Password */}
              <div className="mt-3 relative font-poppins">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-grey-300 text-grey-900 text-sm rounded-lg focus:ring-semiBlue-500 focus:border-semiBlue-500 block w-full p-2.5 dark:text-white dark:focus:ring-semiBlue-500 dark:focus:border-semiBlue-500"
                  placeholder="********"
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

              <div className="flex justify-between mt-4 font-poppins">
                <div className="flex items-center mb-4">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms" className="text-gray-600">
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-primary-600 text-sm mb-4 block text-right underline underline-offset-1"
                >
                  Forget password?
                </a>
              </div>

              {/* Button login */}
              <button
                type="button"
                class="font-poppins cursor-pointer  text-white font-bold relative text-[14px] w-full h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
              >
                Login
              </button>

              <p className=" font-poppins font-semibold text-header-5 text-center py-2">
                Don't have an account?
              </p>
              <Link to="/signup" className="w-full">
                <button
                  type="button"
                  className="font-poppins cursor-pointer  text-white font-bold relative text-[14px] w-full h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
                >
                  Sign up
                </button>
              </Link>
              {/* easyfound */}
              <div className=" mt-10 flex items-center">
                <Link to="/">
                  <img src={Logo1} alt="" className="w-16 h-16" />
                </Link>
                <span className="font-pacifico"> Easy Found</span>
              </div>
            </div>
          </Form>
        </Formik>
      </section>
      <ToastContainer />
    </>
  );
}
