import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import UnstickyNavbar from "../navbar/UnstickyNavbar"; // Ensure this exists
import Navbar from "../navbar/Navbar"; // Ensure this exists
import Footer from "../footer/Footer"; // Ensure this exists
import ChatbotButton from "../AI-chatbot/ChatbotButton"; // Ensure this exists
import ScrollToTopButton from "../button/scroll/ScrollToTop"; // Ensure this exists
import LoginForm from "../../pages/form/LoginForm";
export default function RootLayout() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // Convert to boolean
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (token) => {
    // Logic to handle the login token (e.g., store it in state or localStorage)
    localStorage.setItem("accessToken", token);
    // Update any necessary state for authenticated user
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <UnstickyNavbar />
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        // isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
      />
      <main
        className={`transition-colors duration-300 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <Outlet />
      </main>
      <ChatbotButton />
      <ScrollToTopButton />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
