import React, { useEffect, useState } from "react";
import { HiOutlineMapPin } from "react-icons/hi2";
import { Link } from "react-router-dom";
export function SearchLocation() {
  return (
    <div className=" w-[280px] md:w-[300px]">
      <form class="mx-auto grid justify-center p-10 max-w-2xl">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-black border border-amber-300 rounded-lg bg-amber-50 focus:ring-amber-500 focus:border-amber-500 dark:bg-amber-700 dark:border-amber-600 dark:placeholder-amber-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
            placeholder="Your Location"
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-8 pointer-events-none">
            <HiOutlineMapPin className="text-amber-500 dark:text-amber-400 w-5 h-5" />
          </div>
        </div>
      </form>
    </div>
  );
}
//horizontal
export function HorizontalCategoryScroll({ onCategorySelect }) {
  const categoryMap = {
    Massage: "Skincare Clinics",
    "Property Sales": "Property Sales",
    "Property Rentals": "Property Rentals",
    Spa: "Spa",
    HVAC: "Night Club",
    "Khmer Food": "Khmer Food",
    Electricians: "Electricians",
    Cafe: "Phone Repair", // Display "Phone Repair" for "Cafe"
    "Hair Salon": "Hair Salon",
    "Nail Salon": "Nail Salon",
  };

  return (
    <div className="flex overflow-x-auto hide-scroll-bar py-4">
      {Object.keys(categoryMap).map((category) => (
        <Link
          key={category}
          to={`/${category.replace(/\s+/g, "-").toLowerCase()}`} // Adjust the link path as needed
          className="inline-block px-10 py-2 mx-2 text-sm font-medium text-white bg-amber-400 rounded-lg hover:bg-amber-600"
          onClick={() => onCategorySelect(category)} // Handle category selection
        >
          {categoryMap[category]} {/* Display mapped name */}
        </Link>
      ))}
    </div>
  );
}

export function SearchBar({ onCategorySelect, selectedCategory, onSearch }) {
  const categoryMap = {
    Massage: "Skincare Clinics",
    "Property Sales": "Property Sales",
    "Property Rentals": "Property Rentals",
    Spa: "Spa",
    Electricians: "Electricians",
    "Khmer Food": "Khmer Food",
    Cafe: "Phone Repair",
    "Hair Salon": "Hair Salon",
    "Nail Salon": "Nail Salon",
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false); // Close the dropdown
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
    closeDropdown(); // Close dropdown after selecting a category
    setSearchQuery(""); // Clear the search input when a category is selected
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Call the parent onSearch function
    console.log("Search Query: ", query); // Debugging line
    if (!isDropdownOpen) {
      setIsDropdownOpen(true); // Automatically open dropdown when typing
    }
  };

  // Filter categories based on search query (both keys and displayed values)
  const filteredCategories = Object.keys(categoryMap).filter(
    (category) =>
      category.toLowerCase().includes(searchQuery.toLowerCase()) || // Check the key (e.g., "Massage")
      categoryMap[category].toLowerCase().includes(searchQuery.toLowerCase()) // Check the displayed value (e.g., "Skincare Clinics")
  );

  const clearSearch = () => {
    setSearchQuery("");
    onSearch(""); // Clear the search in the parent component
  };

  return (
    <div className="flex font-poppins justify-start items-center py-8 w-[240px] md:w-[500px]">
      <form className="max-w-lg w-full relative">
        <div className="flex relative">
          <button
            onClick={toggleDropdown}
            className="flex-shrink-0 z-10 inline-flex items-center p-1 md:p-4 text-sm font-medium text-white bg-amber-400 border border-gray-300 rounded-l-lg hover:bg-amber-600"
            type="button"
          >
            {selectedCategory ? categoryMap[selectedCategory] : "Please Select"}{" "}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <input
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="block p-4 w-full z-20 text-sm text-black bg-amber-50 rounded-r-lg border border-gray-300 focus:ring-amber-500 focus:border-amber-500"
            placeholder="Search Categories, Places, Services..."
            required
          />

          {/* Clear Button */}
          {searchQuery && (
            <button
              onClick={clearSearch}
              type="button"
              className="absolute right-0 top-0 mt-4 mr-2 p-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
            >
              Clear
            </button>
          )}
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && filteredCategories.length > 0 && (
          <div className="absolute top-full left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full">
            <ul className="py-2 text-sm text-gray-700">
              {filteredCategories.map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {categoryMap[category]} {/* Display mapped name */}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}

export function TagComponent() {
  return (
    <div className="flex justify-center mx-auto">
      <span
        id="badge-dismiss-yellow"
        class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-900 dark:text-yellow-300"
      >
        Hair Salon
        <button
          type="button"
          class="inline-flex items-center p-1 ms-2 text-sm text-yellow-400 bg-transparent rounded-sm hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300"
          data-dismiss-target="#badge-dismiss-yellow"
          aria-label="Remove"
        >
          <svg
            class="w-2 h-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Remove badge</span>
        </button>
      </span>
    </div>
  );
}
