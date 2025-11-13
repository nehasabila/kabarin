import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [active, setActive] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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
    <nav
      className={`
        fixed w-full top-0 z-50 transition-all duration-300 
        ${darkMode
          ? active
            ? "bg-zinc-800 text-white"
            : "bg-zinc-900 text-white"
          : active
            ? "bg-zinc-100 text-black shadow-md"
            : "bg-white text-black"
        }
      `}
    >
      <div className="flex items-center justify-between px-10 py-5">
        {/* === KIRI: Logo + Menu === */}
        <div className="flex items-center gap-20">
          <h1 className="text-3xl font-bold text-[#1785D9]">Kabarin.</h1>

          <div className="hidden md:flex items-center gap-5 text-sm font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-8 font-semibold text-[#1785D9]"
                  : "hover:underline"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-8 font-semibold text-[#1785D9]"
                  : "hover:underline"
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-8 font-semibold text-[#1785D9]"
                  : "hover:underline"
              }
            >
              News
            </NavLink>

            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-8 font-semibold text-[#1785D9]"
                  : "hover:underline"
              }
            >
              Events
            </NavLink>
          </div>
        </div>

        {/* === KANAN: Search + Login + Darkmode === */}
        <div className="flex items-center gap-4">
          {/* SEARCH */}
          <div className="relative flex items-center">
            {showSearch ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari berita..."
                  autoFocus
                  className={`transition-all duration-300 px-3 py-1 rounded-md text-sm outline-none border
                    ${darkMode
                      ? "bg-zinc-800 border-zinc-600 text-white placeholder-zinc-400"
                      : "bg-white border-gray-300 text-black"
                    }`}
                />
              </form>
            ) : null}

            <FiSearch
              onClick={() => setShowSearch(!showSearch)}
              className="text-xl cursor-pointer ml-2 hover:text-[#1785D9] transition"
            />
          </div>

          {/* LOGIN */}
          <button className="px-4 py-1.5 rounded-lg text-sm font-medium transition bg-[#1785D9] hover:bg-[#1472BC] text-white">
            Login
          </button>

          {/* DARKMODE TOGGLE */}
          <button
            onClick={toggleTheme}
            className={`relative flex items-center w-14 h-7 rounded-full transition-all duration-500 ${darkMode ? "bg-zinc-700" : "bg-zinc-300"}`}
          >
            <div
              className={`absolute w-5 h-5 rounded-full transition-all duration-500 ${
                darkMode ? "translate-x-7 bg-zinc-900" : "translate-x-1 bg-white"
              }`}
            ></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
