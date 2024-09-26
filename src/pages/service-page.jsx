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
            property="og:image"
            content="https://easyfound.automatex.dev/media/uploads/category_0a492b09-90d5-4a29-b21c-944f54693dab.png"
          />
          <meta
            property="og:title"
            content="Easy Found - Cambodia's Premier Service Listing Platform"
          />
          <meta
            property="og:description"
            content="Explore trusted local services, from restaurants to repair shops, all in one place!"
          />

          <meta
            name="keywords"
            content="service listing, Cambodia, local services, restaurants, repair shops"
          />
          <meta name="author" content="Easy Found" />
          <link rel="canonical" href="https://ezfound-cstad.vercel.app/" />

          <meta
            property="og:description"
            content="Explore trusted local services, from restaurants to repair shops, all in one place!"
          />
          <meta property="og:url" content="https://ezfound-cstad.vercel.app/" />
          <meta property="og:type" content="website" />
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
