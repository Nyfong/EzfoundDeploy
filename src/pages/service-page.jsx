import CardService from "../components/cards/servicepage/Card-service";
import HerobannerServiePage from "../components/seaction/servicepage/HeroBanner";
import IframeServicePage from "../components/seaction/iframe/IframeService-page";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import CardShowService from "../components/cards/homepage/Services-Cards";
import Button1 from "../components/button/propBtn/Button1";
import Hairsalom from "../assets/thumbnail/hair salon.jpg";
import Electricain from "../assets/thumbnail/electrician.jpg";
import Nainsalon from "../assets/thumbnail/nail salon.jpg";
import PhoneRepair from "../assets/thumbnail/phone repair.jpg";
import Sale from "../assets/thumbnail/property sale.jpg";
import Rent from "../assets/thumbnail/property rental.jpg";
import SkinCare from "../assets/thumbnail/skincare clinic.jpg";
import KhmerFood from "../assets/thumbnail/khmer food.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  SearchBar,
  SearchLocation,
  TagComponent,
} from "../components/seaction/searchpage/SearchBar";
import OurClient from "../components/seaction/ourclient-Section/Ourclient";
let Servicepage = () => {
  const imageList = [
    Hairsalom,
    Electricain,
    Nainsalon,
    PhoneRepair,
    Sale,

    SkinCare,
    KhmerFood,
    Rent,
  ];
  const tagList = [
    "Hair Salon",
    "Electricains",
    "Nain Salon",
    "Phone Repair",
    " Property Sale",
    " SkinCare",
    "KhmerFood",
    "Many more",
  ];
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Category</title>
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
        <HerobannerServiePage />
        <section className=" max-w-screen-xl min-w-80 mx-auto  p-5  md:p-10 font-poppins ">
          <section className="pt-10 flex justify-between">
            <span className="font-bold  text-header-2 font-pacifico">
              {" "}
              Categories
            </span>
            <Button1 title="Get start" />
          </section>
          <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-screen-xl min-w-80 mx-auto  ">
            {imageList.map((item, i) => (
              <div>
                {/* <CardService imgUrl={item} /> */}
                <CardShowService imgUrl={item} tagList={tagList[i]} />
              </div>
            ))}
          </section>
          <section className="max-w-screen-xl min-w-80 mx-auto">
            {/* <OurClient /> */}
            <IframeServicePage />
          </section>
        </section>
      </HelmetProvider>
    </>
  );
};
export default Servicepage;
