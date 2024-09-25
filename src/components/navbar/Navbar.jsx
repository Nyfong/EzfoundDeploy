import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import logo1 from "../../assets/img/LogoCP1.png"; // Adjust this path accordingly
import logo2 from "../../assets/img/LogoGPD.png";
import {
  getAccessToken,
  removeAccessToken,
  clearSecureLocalStorage,
} from "../../lib/secureLocalStorage"; // Ensure this path is correct

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [loginMessage, setLoginMessage] = useState(""); // State for login message
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const token = getAccessToken();
    setAccessToken(token);
    if (token) {
      setLoginMessage("Login successful!"); // Set message if a token is found
    } else {
      setLoginMessage(""); // Clear message if no token
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle logout
  const handleLogout = () => {
    console.log("Logging out...");

    // Clear all items from secure local storage
    clearSecureLocalStorage();

    // Clear local state
    setAccessToken(""); // Clear access token in local state
    setLoginMessage(""); // Clear login message on logout

    console.log(
      "Logout successful. All items cleared from secure local storage."
    );
  };

  const isLoggedIn = !!accessToken; // Determine if user is logged in based on access token

  return (
    <div
      className={`sticky top-0 z-20 min-w-80 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <header className="sticky top-0 w-full font-poppins">
        <nav className="grid grid-cols-2 sm:grid-cols-4 py-3 px-10">
          {/* Logo and mobile menu button */}
          <div className="col-span-2 flex items-center justify-between lg:col-span-1">
            <NavLink to="/">
              <img
                src={isDarkMode ? logo2 : logo1} // Switch logos based on dark mode
                alt="logo"
                className="h-[55px] w-[55px]"
              />
            </NavLink>
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="lg:hidden text-2xl"
            >
              <i
                className={`fa fa-bars ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              ></i>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul
            className={`flex items-center font-bold sm:gap-5 hidden md:gap-2 lg:flex lg:col-span-2 pl-0 sm:pl-3 ${
              isDarkMode ? "text-white" : "text-black"
            } place-content-center`}
          >
            <li className="p-3">
              <NavLink
                to="/servicepage"
                className={({ isActive }) =>
                  isActive ? "text-amber-600" : "text-amber-500"
                }
              >
                Category
              </NavLink>
            </li>
            <li className="p-3">
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive ? "text-amber-600" : "text-amber-500"
                }
              >
                FAQ
              </NavLink>
            </li>
            <li className="p-3 ">
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive ? "text-amber-600" : "text-amber-500"
                }
              >
                About Us
              </NavLink>
            </li>

            {/* Conditional Rendering for Add to Cart and Profile Icons */}
            {isLoggedIn && (
              <>
                <li className="p-3">
                  <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                      isActive ? "text-amber-600" : "text-amber-500"
                    }
                  >
                    <i className="fa fa-shopping-cart"></i>{" "}
                    {/* Add Cart Icon */}
                  </NavLink>
                </li>
                <li className="p-3">
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive ? "text-amber-600" : "text-amber-500"
                    }
                  >
                    <i className="fa fa-user"></i> {/* Profile Icon */}
                  </NavLink>
                </li>
                <li className="p-3">
                  <button onClick={handleLogout} className="text-amber-500">
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>

          {/* Mobile menu */}
          <ul
            className={`fixed top-0 right-0 w-4/5 h-full flex flex-col items-center transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            } lg:hidden`}
          >
            <li className="p-5">
              <NavLink
                to="/servicepage"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "text-amber-900" : "text-amber-400"
                }
              >
                Category
              </NavLink>
            </li>
            <li className="p-5">
              <NavLink
                to="/faq"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "text-amber-900" : "text-amber-400"
                }
              >
                FAQ
              </NavLink>
            </li>
            <li className="p-5">
              <NavLink
                to="/aboutus"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "text-amber-900" : "text-amber-400"
                }
              >
                About Us
              </NavLink>
            </li>

            {/* Conditional Rendering for Add to Cart and Profile Icons in Mobile Menu */}
            {isLoggedIn && (
              <>
                <li className="p-5">
                  <NavLink
                    to="/cart"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      isActive ? "text-amber-900" : "text-amber-400"
                    }
                  >
                    <i className="fa fa-shopping-cart"></i>{" "}
                    {/* Add Cart Icon */}
                  </NavLink>
                </li>
                <li className="p-5">
                  <NavLink
                    to="/profile"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      isActive ? "text-amber-900" : "text-amber-400"
                    }
                  >
                    <i className="fa fa-user"></i> {/* Profile Icon */}
                  </NavLink>
                </li>
                <li className="p-5">
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="text-amber-900"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            <button
              onClick={toggleMenu}
              aria-label="Close Menu"
              className="absolute top-4 right-4 text-2xl"
            >
              <i className="fa fa-times"></i>
            </button>
          </ul>

          {/* Theme toggle */}
          <div className="col-span-2 flex items-center justify-end lg:col-span-1">
            <div className="flex gap-4 items-center">
              {/* Dark Mode Toggle Button */}
              <button onClick={toggleDarkMode} className="p-1">
                {isDarkMode ? (
                  <i className="fa fa-sun text-yellow-400"></i>
                ) : (
                  <i className="fa fa-moon text-gray-900"></i>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Display the login success message */}
        {loginMessage && (
          <div className="text-center text-green-500">{loginMessage}</div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
