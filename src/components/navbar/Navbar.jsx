import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo1 from "../../assets/img/LogoCP1.png";
import logo2 from "../../assets/img/LogoGPD.png";
import { Link } from "react-router-dom";
import {
  getAccessToken,
  removeAccessToken,
  clearSecureLocalStorage,
} from "../../lib/secureLocalStorage";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken"); // Check access token

  // handle logout
  const handleLogout = () => {
    clearSecureLocalStorage();
    navigate("/");
  };

  return (
    <div
      className={`sticky top-0 z-20 min-w-80 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <header className="sticky top-0 w-full font-poppins">
        <nav className="grid grid-cols-2 sm:grid-cols-4 py-3 px-10">
          <div className="col-span-2 flex items-center justify-between lg:col-span-1">
            <NavLink to="/">
              <img
                src={isDarkMode ? logo2 : logo1}
                alt="logo"
                className="h-[55px] w-[55px]"
              />
            </NavLink>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            <li className="p-3">
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive ? "text-amber-600" : "text-amber-500"
                }
              >
                About Us
              </NavLink>
            </li>
            {!accessToken ? (
              <>
                <Link to="/signup" className="ml-2">
                  Register
                </Link>
                <Link to="/login" className="ml-2">
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile" className="ml-2">
                  <i class="fa-solid fa-user"></i>
                </Link>
                <button onClick={handleLogout} className="ml-8">
                  Logout
                </button>
              </>
            )}
          </ul>

          {/* Mobile Menu */}
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
                onClick={() => setIsMenuOpen(false)}
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
                onClick={() => setIsMenuOpen(false)}
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
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-amber-900" : "text-amber-400"
                }
              >
                About Us
              </NavLink>
            </li>

            {!accessToken ? (
              <>
                <Link to="/register">Register</Link>
                <Link to="/login" className="ml-2">
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile">
                  <i class="fa-solid fa-user"></i>
                </Link>
                <button onClick={handleLogout} className="ml-8">
                  Logout
                </button>
              </>
            )}

            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
              className="absolute top-4 right-4 text-2xl"
            >
              <i className="fa fa-times"></i>
            </button>
          </ul>

          {/* Dark Mode Toggle */}
          <div className="col-span-2 flex items-center justify-end lg:col-span-1">
            <div className="flex gap-4 items-center">
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
      </header>
    </div>
  );
};

export default Navbar;
