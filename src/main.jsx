import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";  // ← Tambah ini

import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop";
import News from "./News.jsx"; 
import AboutUs from "./AboutUs.jsx"; 
import NewsDetail from "./NewsDetail.jsx";


function Root() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
        }`}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App darkMode={darkMode} />} />
          <Route path="/news" element={<News darkMode={darkMode} />} />
          <Route path="/about-us" element={<AboutUs darkMode={darkMode} />} />
          <Route path="/news/:id" element={<NewsDetail darkMode={darkMode} />} />
        </Routes>

        <Footer darkMode={darkMode} />
      </div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
