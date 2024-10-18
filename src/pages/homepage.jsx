import heroBannerImg from "../assets/img/herobanner.png";
import SubBanner from "../components/seaction/SubBanner-homepage";
import Details from "../components/seaction/homepage/Details-section";
import CardShowService from "../components/cards/homepage/Services-Cards";
import CardShowTrending from "../components/cards/homepage/Card-show-trending";
import ServiceSection from "../components/seaction/homepage/Service-section";
import Footer from "../components/footer/Footer";
import Lottie from "lottie-react";
import Button1 from "../components/button/propBtn/Button1";
import animationData from "../components/animations/animationGirl.json";
import ScrollTriggeredCountUp from "../components/scrollTrigger/ScrollTrigger";
import { Helmet, HelmetProvider } from "react-helmet-async";
import GoogleAdSense from "./profile/Ads";
let Homepage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Homepage | Easy found</title>
        <meta
          name="keywords"
          content="Easy Found - Cambodia's Premier Service Listing Platform"
        />
        <meta
          name="description"
          content="Explore trusted local services, from restaurants to repair shops, all in one place!"
          data-rh="true"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Easy Found" />
        <meta property="og:title" content="Easy Found Istad" data-rh="true" />
        <meta
          property="og:image"
          content="https://easyfound.automatex.dev/media/uploads/category_56a67b94-b22f-478f-adb7-9e67ed88ef11.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Easy Found Logo Servicelisitng Website"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Easy Found - Cambodia's Premier Service Listing Platform"
          data-rh="true"
        />
        <meta name="twitter:site" content="Service Listing" data-rh="true" />
        <meta
          name="twitter:card"
          content="summary_large_image"
          data-rh="true"
        />
        <meta
          name="twitter:title"
          content="Istad Easy Found | Platform for Cambodian Finding Services"
          data-rh="true"
        />
        <meta
          name="twitter:description"
          content="Explore trusted local services, from restaurants to repair shops, all in one place! Easy Found"
          data-rh="true"
        />
      </Helmet>
      <div>
        {/* Main section */}
        <main className=" max-w-screen-xl min-w-80 mx-auto p-5 border-t border-gray-200">
          {/* hero banner */}
          <section className=" mb-10 md:mt-0 grid grid-cols-1 md:grid-cols-2 md:p-3 md:gap-4">
            <div className=" flex flex-col justify-center gap-5 ">
              <div className="flex gap-3">
                <i class="fa-solid fa-medal text-xl"></i>
                <p className="font-pacifico">Service listing website</p>
              </div>
              <div>
                <h1 className="font-bold font-poppins text-5xl leading-snug md:leading-relaxed ">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-500 to-pink-500">
                    Easy Found
                  </span>{" "}
                  <br />
                  Find Local Services Easier with Easy Found
                </h1>
              </div>
              <div>
                <p className="font-poppins">
                  Welcome to Easy Found, Cambodia’s premier service listing
                  platform! Explore a wide range of trusted local services, from
                  restaurants to repair shops, all in one place. Let Easy Found
                  connect you to what you need with just a few clicks!{" "}
                </p>
              </div>
              {/* show contact people */}
              <div>
                <div className="">
                  <div class="flex -space-x-4 rtl:space-x-reverse  w-auto ">
                    <img
                      class="w-10 h-10 border-2 object-cover border-white rounded-full dark:border-gray-800"
                      src="https://easyfound.automatex.dev/media/uploads/category_766e90b6-4efd-4f45-be42-42e2920730c6.jpg"
                      alt=""
                    />
                    <img
                      class="w-10 h-10 border-2  object-cover border-white rounded-full dark:border-gray-800"
                      src="http://easyfound.automatex.dev/media/uploads/category_dfeae133-e727-4c9c-bab4-e78d77f7ff02.jpg"
                      alt=""
                    />
                    <img
                      class="w-10 h-10 border-2 object-cover border-white rounded-full dark:border-gray-800"
                      src="https://easyfound.automatex.dev/media/uploads/category_2f852a33-959a-4768-9bf2-0dae1340cc23.jpg"
                      alt=""
                    />
                    <img
                      class="w-10 h-10 border-2 object-cover border-white rounded-full dark:border-gray-800"
                      src="https://easyfound.automatex.dev/media/uploads/category_6c71b695-3487-47ab-87c9-8c01dc9a2a32.jpg"
                      alt=""
                    />
                    <img
                      class="w-10 h-10 border-2 object-cover border-white rounded-full dark:border-gray-800"
                      src="https://easyfound.automatex.dev/media/uploads/category_1c57b7ca-5171-4b4a-b2cc-3f00e3cc4a61.jpg"
                      alt=""
                    />

                    <img
                      class="w-10 h-10 border-2 object-cover border-white rounded-full dark:border-gray-800"
                      src="https://easyfound.automatex.dev/media/uploads/category_bcfa75c3-3964-47f7-ab49-3acca2168750.jpg"
                      alt=""
                    />
                    <img
                      class="w-10 h-10 border-2 object-cover border-white rounded-full dark:border-gray-800"
                      src="https://easyfound.automatex.dev/media/uploads/category_7ef81c10-543e-4fb2-a4be-dc314bfebe2f.png"
                      alt=""
                    />
                    <a
                      class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                      href="#"
                    >
                      +99
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* image  */}
            <div className="">
              <Lottie animationData={animationData} loop={true}></Lottie>
            </div>
          </section>
          <section className="mb-10 ">
            <SubBanner />
            <GoogleAdSense />
          </section>
          {/* card  */}
          <section className="mb-10">
            <CardShowTrending />
            <div className="mt-8 flex flex-wrap justify-center gap-4 ">
              <Button1 title="Get start" />
            </div>
          </section>
        </main>
        {/* details */}
        <section className="mb-10 px-5">
          <Details />
        </section>
        {/* scroll trigger */}
        <section className="max-w-screen-xl min-w-80 mx-auto ">
          <ScrollTriggeredCountUp />
        </section>
        {/* card */}
      </div>
    </HelmetProvider>
  );
};

export default Homepage;
