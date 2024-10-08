import { useEffect, useState } from "react";
import { getAllProduct } from "./getAllProduct";
import { ProductCardClone } from "./CardClone";
import Lottie from "lottie-react";
import Loading from "../components/animations/loading.json";
import { SearchBar } from "../components/seaction/searchpage/SearchBar";
import LogoGP from "../assets/img/LogoCP1.png";
import PaginatedProductList from "./Pagenation";
import { Helmet, HelmetProvider } from "react-helmet-async";
export function TestAPI() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(""); // Store the selected category
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Fetch products based on selected category
  const fetchAllProduct = async (category) => {
    setLoading(true);
    const product = await getAllProduct(category); // Fetch products based on selected category
    setData(product);
    setLoading(false);
  };

  // Effect to fetch products when selectedCategory changes
  useEffect(() => {
    if (selectedCategory) {
      fetchAllProduct(selectedCategory); // Fetch products when selectedCategory changes
    }
  }, [selectedCategory]);

  // Fetch all products initially
  useEffect(() => {
    fetchAllProduct(""); // Fetch all products when the component mounts
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle back button click
  const handleBackClick = () => {
    setSelectedCategory(""); // Reset selected category
    fetchAllProduct(""); // Fetch all products again
    setCurrentPage(1); // Reset to the first page
  };
  const handleSearch = (query) => {
    console.log("Searching for: ", query);
    // Implement the search logic here
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>service listing</title>
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
      <div className="max-w-screen-xl min-w-80 mx-auto px-10 md:p-4">
        <div className="flex items-center gap-4 sticky top-[55px] z-10 justify-center md:justify-start">
          <SearchBar
            onCategorySelect={setSelectedCategory}
            selectedCategory={selectedCategory}
            onSearch={handleSearch}
          />{" "}
          {/* Pass category to setSelectedCategory */}
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="w-32 cursor-pointer text-white font-bold relative text-[10px] h-[3em] text-center 
            bg-gradient-to-r from-amber-500 from-10% via-sky-500 via-40% to-pink-500 to-90% 
            bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] 
            before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] 
            before:-right-[5px] before:bg-gradient-to-r before:from-amber-500 before:from-10% 
            before:via-sky-500 before:via-40% before:to-pink-500 before:bg-[length:400%] 
            before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all 
            before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] 
            active:bg-amber-600 focus:ring-amber-700"
          >
            All services
          </button>
        </div>

        <div className="flex flex-col gap-10">
          {loading && (
            <div className="text-center">
              <Lottie
                animationData={Loading}
                className="h-[300px]"
                loop={true}
              />
            </div>
          )}
          {!loading && (
            <>
              {currentProducts.map((product) => (
                <ProductCardClone
                  key={product.id}
                  title={product.name}
                  category={product.category}
                  day={product.working_days}
                  price={product.price}
                  description={product.description}
                  id={product.id}
                  images={product?.image ?? LogoGP}
                />
              ))}

              {/* Pagination Component */}
              <PaginatedProductList
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </>
          )}
        </div>
      </div>
    </HelmetProvider>
  );
}
