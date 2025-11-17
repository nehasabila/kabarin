import { useState, useEffect } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [active, setActive] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/news?search=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      {/* ===================== NAVBAR ===================== */}
      <nav
        className={`
          fixed w-full top-0 z-50 transition-all duration-300 
          ${
            darkMode
              ? active
                ? "bg-zinc-800 text-white"
                : "bg-zinc-900 text-white"
              : active
              ? "bg-zinc-100 text-black shadow-md"
              : "bg-white text-black"
          }
        `}
      >
        <div className="flex items-center justify-between px-6 py-4">

          {/* === KIRI: LOGO + MENU (Desktop) === */}
          <div className="flex items-center gap-8">
            <img  src="/assets/Image/logo.png" alt="logo" className="max-w-[150px]" />
            {/* <h1 className="text-3xl font-bold text-[#1785D9]">Kabarin.</h1> */}

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              {["Home", "About Us", "News", "Events"].map((item) => (
                <NavLink
                  key={item}
                  to={
                    item === "Home"
                      ? "/"
                      : "/" + item.toLowerCase().replace(" ", "-")
                  }
                  className={({ isActive }) =>
                    isActive
                      ? "underline underline-offset-8 font-semibold text-[#1785D9]"
                      : "hover:underline"
                  }
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </div>

          {/* === KANAN: Search + Login + Mode + Hamburger === */}
          <div className="flex items-center gap-4">

            {/* SEARCH */}
            <div className="relative flex items-center">
              {showSearch && (
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari berita..."
                    className={`px-3 py-1 border rounded-md text-sm outline-none transition 
                      ${
                        darkMode
                          ? "bg-zinc-800 border-zinc-600 text-white"
                          : "bg-white border-gray-300 text-black"
                      }`}
                  />
                </form>
              )}

              <FiSearch
                onClick={() => setShowSearch(!showSearch)}
                className="text-xl cursor-pointer ml-2 hover:text-[#1785D9]"
              />
            </div>

            {/* LOGIN */}
            <button className="hidden md:block px-4 py-1.5 rounded-lg text-sm font-medium transition bg-[#1785D9] hover:bg-[#1472BC] text-white">
              Login
            </button>

            {/* DARKMODE */}
            <button
              onClick={toggleTheme}
              className={`relative flex items-center w-14 h-7 rounded-full transition ${
                darkMode ? "bg-zinc-700" : "bg-zinc-300"
              }`}
            >
              <div
                className={`absolute w-5 h-5 rounded-full transition ${
                  darkMode ? "translate-x-7 bg-zinc-900" : "translate-x-1 bg-white"
                }`}
              ></div>
            </button>

            {/* HAMBURGER (Mobile Only) */}
            <FiMenu
              onClick={() => setSidebarOpen(true)}
              className="text-3xl cursor-pointer md:hidden"
            />
          </div>
        </div>
      </nav>

      {/* ===================== SIDEBAR MOBILE ===================== */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-[60] transition-transform duration-300 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          ${darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"}
          shadow-xl
        `}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <FiX
            onClick={() => setSidebarOpen(false)}
            className="text-2xl cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-5 p-5 text-lg">
          {[
            { label: "Home", link: "/" },
            { label: "About Us", link: "/about-us" },
            { label: "News", link: "/news" },
            { label: "Events", link: "/events" },
          ].map((item) => (
            <NavLink
              key={item.label}
              to={item.link}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#1785D9] font-semibold"
                  : "hover:text-[#1785D9]"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button className="mt-5 px-4 py-2 rounded-lg bg-[#1785D9] text-white hover:bg-[#1472BC]">
            Login
          </button>
        </div>
      </div>

      {/* ===================== OVERLAY ===================== */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-[50] md:hidden"
        ></div>
      )}
    </>
  );
};

export default Navbar;
