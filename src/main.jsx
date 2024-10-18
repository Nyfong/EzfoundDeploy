import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Servicepage from "./pages/service-page.jsx";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout.jsx";
import Homepage from "./pages/homepage.jsx";
import DetailListingPage from "./pages/DetailsListing-page.jsx";
import ServiceListing from "./pages/servicelisting-page.jsx";
import SearchPage from "./pages/search-page.jsx";
import LoginForm from "./pages/form/LoginForm.jsx";
import SignUpForm from "./pages/form/SignupForm.jsx";
import Faq from "./pages/Faq.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import { ErrorPage } from "./pages/404/ErrorPage.jsx";
import Test from "./test.jsx";
import { Profile } from "./pages/Profilepage.jsx";
import CloneDetails from "./store/CloneDetail.jsx";
import { CardProfile } from "./pages/profile/CardProfile.jsx";
import { TestAPI } from "./store/ServiceListingwithAPI.jsx";
import GeminiChatBot from "./components/AI-chatbot/GeminiChatBot.jsx";
import AuthLayout from "./components/layout/AuthLayout.jsx"; // Import the new layout
import Verify from "./pages/form/Verify.jsx";
import GoogleAdSense from "./pages/profile/Ads.jsx";
const handleLogin = (token) => {
  // Logic to handle the login token (e.g., store it in state or localStorage)
  localStorage.setItem("accessToken", token);
  // Update any necessary state for authenticated user
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Normal layout with Navbar and Footer
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/servicepage",
        element: <Servicepage />,
      },
      // {
      //   path: "/detailsListingpage",
      //   element: <DetailListingPage />,
      // },
      {
        path: "/servicelisting/:id",
        element: <CloneDetails />,
      },
      {
        path: "/ads",
        element: <GoogleAdSense />,
      },
      {
        path: "/searchpage",
        element: <SearchPage />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      // {
      //   path: "/a",
      //   element: <Test />,
      // },
      {
        path: "/servicelisting",
        element: <TestAPI />,
      },
      {
        path: "/ai",
        element: <GeminiChatBot />,
      },
      // {
      //   path: "/acc",
      //   element: <Profile />,
      // },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      {
        path: "/verify",
        element: <Verify />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthLayout>
        <LoginForm handleLogin={handleLogin} />{" "}
        {/* Login form inside AuthLayout */}
      </AuthLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthLayout>
        <SignUpForm /> {/* Signup form inside AuthLayout */}
      </AuthLayout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
