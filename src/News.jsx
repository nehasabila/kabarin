import { newsData } from "./data/newsData.js";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiHeart,
  FiMessageCircle,
  FiShare2,
  FiBookmark,
  FiAlertTriangle,
  FiSend,
} from "react-icons/fi";

function News({ darkMode }) {
  const [filter, setFilter] = useState("terbaru");
  const [category, setCategory] = useState("Semua");

  const [limit, setLimit] = useState(5);
  const listRef = useRef(null);

  const navigate = useNavigate();

  const trendingNews = [
    { id: 1, title: "Kebijakan Baru Pemerintah Soal Pendidikan 2025" },
    { id: 2, title: "Harga Beras Naik, Ekonomi Rumah Tangga Terdampak" },
    { id: 3, title: "AI Generasi Baru Masuk Dunia Kerja Lebih Cepat" },
    { id: 4, title: "Aplikasi Media Sosial Lokal Tembus 10 Juta Pengguna" },
    { id: 5, title: "Fenomena Cuaca Ekstrem Diprediksi Berlanjut" },
  ];

  // Filter berdasarkan kategori
  const filteredNews =
    category === "Semua"
      ? newsData
      : newsData.filter((item) => item.category === category);

  // Sorting berita setelah difilter
  const sortedNews = [...filteredNews].sort((a, b) => {
    if (filter === "populer") return b.views - a.views;
    if (filter === "disukai") return b.likes - a.likes;
    return new Date(b.date) - new Date(a.date);
  });

  // Infinite scroll
  useEffect(() => {
    const container = listRef.current;
    if (!container) return;

    const handleScroll = () => {
      const bottom =
        container.scrollTop + container.clientHeight >= container.scrollHeight - 10;

      if (bottom) {
        setLimit((prev) =>
          prev + 5 > sortedNews.length ? sortedNews.length : prev + 5
        );
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [sortedNews.length]);

  // Reset limit saat kategori berubah
  useEffect(() => {
    setLimit(5);
  }, [category]);

  const categories = [
    "Semua",
    "Teknologi",
    "Edukasi",
    "Olahraga",
    "Nasional",
    "Internasional",
    "Hiburan",
    "Ekonomi",
    "Kesehatan",
    "Politik",
    "Wisata",
    "Sains",
    "Otomotif",
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
      } min-h-screen px-10 py-25`}
    >
      {/* NAVBAR KATEGORI */}
      <div className="w-full border-b border-gray-600 pb-3 mb-6">
        <ul className="flex gap-8 text-sm font-medium overflow-x-auto whitespace-nowrap">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setCategory(cat)}
              className={`cursor-pointer ${
                category === cat ? "text-blue-400" : "hover:text-blue-400"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* GRID KONTEN */}
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-4 border-b-2 pb-15 ${
          darkMode ? "border-zinc-700" : "border-zinc-300"
        }`}
      >
        {/* BERITA UTAMA (gunakan filteredNews[0]) */}
        {filteredNews.length > 0 && (
          <div
            onClick={() => navigate(`/news/${filteredNews[0].id}`)}
            className={`md:col-span-2 rounded-lg overflow-hidden border shadow-lg cursor-pointer hover:opacity-90 transition ${
              darkMode ? "border-zinc-700" : "border-zinc-300"
            }`}
          >
            <img
              src={filteredNews[0].image}
              className="w-full h-[350px] object-cover"
              alt=""
            />
            <div className="p-4">
              <span className="text-xs text-blue-400">
                {filteredNews[0].category}
              </span>
              <h2 className="text-lg font-semibold mt-1">
                {filteredNews[0].title}
              </h2>
              <p className="text-sm text-gray-400">{filteredNews[0].date}</p>
            </div>
          </div>
        )}

        {/* 4 BERITA KECIL */}
        <div className="grid grid-cols-2 gap-4">
          {filteredNews.slice(1, 5).map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/news/${item.id}`)}
              className={`rounded-lg overflow-hidden shadow-lg cursor-pointer hover:opacity-90 transition border ${
                darkMode ? "border-zinc-700" : "border-zinc-300"
              }`}
            >
              <img
                src={item.image}
                className="w-full h-40 object-cover"
                alt=""
              />
              <div className="p-2">
                <span className="text-[11px] text-blue-400">
                  {item.category}
                </span>
                <h2 className="text-sm font-semibold leading-tight mt-1">
                  {item.title}
                </h2>
                <p className="text-[11px] text-gray-400">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GRID BERITA BAWAH */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-5 pt-7">
        {/* Sidebar kiri */}
        <div className="order-2 md:order-1 col-span-3 md:col-span-3 mt-2 md:sticky md:mt-5 mb-10 md:top-17 h-fit">

          <SidebarBox
            darkMode={darkMode}
            icon={<FiAlertTriangle />}
            title="Laporkan Berita Hoaks"
            desc="Temukan berita yang mencurigakan? Laporkan kepada kami."
            buttonText="Laporkan Sekarang"
          />

          <SidebarBox
            darkMode={darkMode}
            icon={<FiSend />}
            title="Kirim Berita"
            desc="Punya informasi penting? Kirimkan ke redaksi kami."
            buttonText="Kirim Berita"
          />
        </div>

        {/* Daftar berita */}
        <div
          ref={listRef}
          className="order-3 md:order-2 md:col-span-6 col-span-3 space-y-6 max-h-[200vh] overflow-y-auto pr-0 md:pr-3 news-scroll"
        >

          <div
            className={`flex justify-between items-center mb-4
                        sticky top-0 z-20 py-3
                        ${darkMode ? "bg-zinc-900" : "bg-white"}`}
          >

            <h2 className="text-lg font-semibold">Daftar Berita</h2>

            <div className="flex gap-2">
              {[
                { label: "Terbaru", value: "terbaru" },
                { label: "Paling Populer", value: "populer" },
                { label: "Paling Disukai", value: "disukai" },
              ].map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => setFilter(btn.value)}
                  className={`px-3 py-1 text-sm rounded-full transition ${
                    filter === btn.value
                      ? "bg-[#1785D9] text-white"
                      : darkMode
                      ? "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* List berita */}
          {sortedNews.slice(0, limit).map((item) => (
            <NewsCard
              key={item.id}
              item={item}
              darkMode={darkMode}
              navigate={navigate}
            />
          ))}

          {limit < sortedNews.length && (
            <p className="text-center text-sm py-3 opacity-70">Memuat berita...</p>
          )}
        </div>

        {/* Trending */}
        <div className="order-1 md:order-3 col-span-3 md:col-span-3 mt-6 md:mt-10 md:sticky md:top-24 h-fit">
              
          <TrendingList darkMode={darkMode} trendingNews={trendingNews} />
        </div>
      </div>
    </div>
  );
}

/* === COMPONENTS === */
function SidebarBox({ darkMode, icon, title, desc, buttonText }) {
  return (
    <div
      className={`p-4 rounded-xl shadow-md border transition-colors duration-300 mt-7 ${
        darkMode
          ? "bg-zinc-900 border-zinc-700 text-white"
          : "bg-white border-zinc-200 text-black"
      }`}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className={`text-sm mb-4 ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
        {desc}
      </p>

      <button
        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border transition
          ${
            darkMode
              ? "border-zinc-600 text-zinc-300 bg-transparent hover:border-blue-500 hover:text-blue-400"
              : "bg-white border-gray-300 text-gray-700 hover:text-blue-600 hover:border-blue-400"
          }`}
      >
        {icon}
        {buttonText}
      </button>
    </div>
  );
}

function NewsCard({ item, darkMode, navigate }) {
  const [likes, setLikes] = useState(item.likes);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [commentInput, setCommentInput] = useState("");

  const handleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  return (
    <div
      onClick={() => navigate(`/news/${item.id}`)}
      className={`border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:opacity-95 transition ${
        darkMode
          ? "bg-zinc-900 border-zinc-700 text-white"
          : "bg-white border-zinc-200 text-black"
      }`}
    >
      <img src={item.image} className="w-full h-[200px] object-cover" alt="" />
      <div className="p-4">
        <span className="text-xs text-blue-400">{item.category}</span>
        <h2 className="text-lg font-semibold mt-1">{item.title}</h2>
        <p className="text-sm text-gray-400">{item.date}</p>

        <p className="text-sm text-gray-500 mt-2">
        {item.content}
        </p>

        <div
          className="flex justify-between text-gray-600 text-sm mt-3 border-t pt-3 select-none"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-3 py-2 hover:text-blue-600 transition ${
              liked ? "text-red-500" : ""
            }`}
          >
            <FiHeart className="text-lg" />
            <span className="md:inline">{likes}</span>
          </button>

          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-2 px-3 py-2 hover:text-blue-600 transition"
          >
            <FiMessageCircle className="text-lg" />
            <span className="md:inline">{comments.length}</span>
          </button>

          <button className="flex items-center gap-2 px-3 py-2 hover:text-blue-600 transition">
            <FiShare2 className="text-lg" />
            <span className="hidden md:inline">Bagikan</span>
          </button>

          <button
            onClick={() => setSaved(!saved)}
            className={`flex items-center gap-2 px-3 py-2 transition ${
              saved ? "text-blue-500" : "hover:text-blue-600"
            }`}
          >
            <FiBookmark className="text-lg" />
            <span className="hidden md:inline">
              {saved ? "Disimpan" : "Simpan"}
            </span>
          </button>
        </div>

        {showComments && (
          <div className="mt-4 animate-fadeIn" onClick={(e) => e.stopPropagation()}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (commentInput.trim() === "") return;

                const newComment = {
                  text: commentInput,
                  name: "Jane Doe",
                  time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                  avatar: `https://i.pravatar.cc/40?img=${Math.floor(
                    Math.random() * 70
                  )}`,
                };

                setComments([...comments, newComment]);
                setCommentInput("");
              }}
              className="flex gap-3 mb-3"
            >
              <input
                type="text"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Tulis komentar..."
                className="flex-1 border rounded-full px-4 py-2 text-sm outline-none"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-[#1785D9] text-white rounded-full text-sm transition hover:bg-[#1472BC]"
              >
                Kirim
              </button>
            </form>

            <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
              {comments.map((c, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <img src={c.avatar} className="w-8 h-8 mt-2 rounded-full object-cover" />
                  <div className="p-2 rounded-lg w-full">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold">{c.name}</p>
                      <span className="text-xs text-gray-500">{c.time}</span>
                    </div>
                    <p className="text-sm mt-1">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function TrendingList({ darkMode, trendingNews }) {
  return (
    <div
      className={`p-4 rounded-xl shadow-md border ${
        darkMode
          ? "bg-zinc-900 border-zinc-700 text-white"
          : "bg-white border-zinc-200 text-black"
      }`}
    >
      <h3 className="text-lg font-bold pb-3">Trending Hari Ini</h3>
      <ul className="space-y-3">
        {trendingNews.map((item, index) => (
          <li key={item.id} className="flex items-start gap-3 cursor-pointer group">
            <span className="text-blue-500 font-semibold text-lg leading-none">
              {index + 1}.
            </span>
            <p className="text-sm leading-snug group-hover:text-blue-600 transition">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
